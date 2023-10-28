let hre = require("hardhat");
let ethereumjsUtil = require("ethereumjs-util");
let defaultAbicoder = hre.ethers.AbiCoder.defaultAbiCoder();
let keccak256 = hre.ethers.keccak256;
let keccak_256 = require("js-sha3").keccak_256;
let EC = require("elliptic").ec;
let arrayify = hre.ethers.getBytes;

let fs = require("fs");

let express = require("express");
let cookieParser = require("cookie-parser");
let cors = require("cors");
let axios = require('axios');

let dotenv = require("dotenv");

let {
    deployEntryPoint,
    deploySimpleAccountFactory,
    deployCounter,
    deployPaymaster,
    getFactory,
    getAddress,
    getBalance,
    initiateSmartAccount,
    connectEntryPoint,
    connectPayMaster,
    deployAll
} = require("./helpers/deploy");

let generateKeyPair = require("./helpers/cryptography");

let { addUserCred,
    createUserFile,
    updateUserFile,
    checkUser,
    getFileName,
    getPublicAddress
} = require("./helpers/auth");

let {
    signUserOp,
    getUserOpHash,
    packUserOp,
    sendTestEth,
    paymasterDeposit,
    getPublicKeyFromPrivateKey,
    getInitCode
} = require("./helpers/userOp");

let {
    packExactInputSingleParams,
    getSwapRouter,
    getPool
} = require("./helpers/swap");

//@todo update auth filepaths as we are running in msit/ --> done

//load all env variables
dotenv.config();
let chainId = hre.network.config.chainId;
let entryPointAddress = chainId == 31337 ? process.env.ENTRYPOINT_ADDRESS : process.env.BUILDBEAR_ENTRYPOINT_ADDRESS;
let simpleAccountFactoryAddress = chainId == 31337 ? process.env.SIMPLEACCOUNTFACTORY_ADDRESS : process.env.BUILDBEAR_SIMPLEACCOUNTFACTORY_ADDRESS;
let counterAddress = chainId == 31337 ? process.env.COUNTER_ADDRESS : process.env.BUILDBEAR_COUNTER_ADDRESS;
let payMasterAddress = chainId == 31337 ? process.env.PAYMASTER_ADDRESS : process.env.BUILDBEAR_PAYMASTER_ADDRESS;

//express api
let app = express();
app.use(express.json())
app.use(cookieParser("top secret")) //sign
app.use(cors())


// /startSession api
app.post("/startSession", async (req, res) => {
    let email = req.query.email;
    let userName = req.query.userName;
    fs.readFile("./scripts/cred.json", async (err, data) => {

        data = JSON.parse(data);
        if (err) {
            console.log(err);
            res.statusMessage = "internal error";
            res.statusCode = 320;
            return;
        }

        let isExist = checkUser(data, email);
        console.log(isExist);
        if (isExist == true) {
            let fileAddress = getFileName(email);
            fs.readFile(fileAddress, async (err, dataC) => {
                if (err) {
                    console.log(err);
                    res.statusMessage = "internal error";
                    res.statusCode = 320;
                    res.send()
                    return;
                }
                dataC = JSON.parse(dataC)
                let privateKey = dataC['privateKey']
                res.cookie("encrypted", privateKey, { maxAge: 36000000, signed: true });
                res.cookie("email", email, { maxAge: 36000000, signed: true });
                res.statusCode = 200;
                res.send();
            })
        } else {
            addUserCred(email, userName);
            var [privateKey, publicKey] = generateKeyPair();
            var smartAccAddress = await getAddress(simpleAccountFactoryAddress, publicKey);
            createUserFile(email, publicKey, privateKey, smartAccAddress);
            await sendTestEth(smartAccAddress);
            res.cookie("encrypted", privateKey, { maxAge: 36000000, signed: true });
            res.cookie("email", email, { maxAge: 36000000, signed: true });
            res.statusCode = 200;
            res.send();
        }
    })
});

//@todo sendEth api
app.post("/sendETH", async (req, res) => {
    let userName = req.query.userName; // email for now
    let value = req.query.value;
    let cookies = req.signedCookies;
    let privateKey = cookies['encrypted'];
    let email = cookies['email'];
    var fileAddress = getFileName(email);

    const url = 'http://127.0.0.1:4000/getPubTo?userName=' + userName;
    let postData = {};
    let pubKeyTo = await axios.post(url, postData)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    fs.readFile(fileAddress, async (err, data) => {

        if (err) {
            console.log(err)
            res.statusMessage = "internal error";
            res.statusCode = 320;
            res.send();
        }

        data = JSON.parse(data);

        var publicKey = data['publicKey'];
        var isInitated = data['isInitiated'];
        var smartAccAddress = data['smartAccAddress'];

        var initCode = '0x';
        let entryPointInstance = await connectEntryPoint(entryPointAddress);
        let payMasterInstance = await connectPayMaster(payMasterAddress);
        let payMasterDeposits = await entryPointInstance.getDepositInfo(payMasterAddress);

        if (payMasterDeposits[0] == hre.ethers.parseEther("0")) {
            await paymasterDeposit(entryPointAddress, payMasterInstance);
            console.log("depositing to paymaster");
        }

        nonce = await entryPointInstance.getNonce(smartAccAddress, 0);
        if (!isInitated) {
            var initCode = await getInitCode(simpleAccountFactoryAddress, publicKey)
            console.log("hi");
        }

        let smartAccountInstance = await hre.ethers.getContractAt("SimpleAccount", smartAccAddress)

        let acc = await smartAccountInstance.execute.populateTransaction(pubKeyTo, hre.ethers.parseUnits(value, "gwei"), "0x");

        //@todo dont make rough gas estimates
        var userOp = {
            sender: smartAccAddress,//should write a function to handle initcode & sender
            nonce: nonce,
            initCode: initCode, //@todo --> need to write the function
            callData: acc.data,//acc.data, //@todo --> need to write the function
            callGasLimit: '0x' + 10e5.toString(16), //should calculate this
            verificationGasLimit: '0x' + 10e5.toString(16),
            preVerificationGas: '0x' + 10e5.toString(16),
            maxFeePerGas: 1,
            maxPriorityFeePerGas: 1,
            paymasterAndData: payMasterAddress,
            signature: "0x"
        }

        var signedOp = signUserOp(userOp, { privateKey: privateKey }, entryPointAddress, chainId);
        console.log(signedOp);

        try {
            const test = await entryPointInstance.handleOps([signedOp], "0x35AeEb1cAc11D7C084e65F3217f111dA03493bB1");
            console.log(test);
        } catch (error) {
            console.log(error);
        }

        if (isInitated == false) {
            updateUserFile(email, publicKey, privateKey, smartAccAddress, true)
        }
        res.send("Success"); // can change status code and send based on try catch

    });

});

//@todo sendToken api
//@todo swapEth api
app.post("/swapETH", (req, res) => {
    let value = req.query.value;

    if (chainId == 11636) {
        let poolInstance = getPool("")
    }

})
//@todo swapToken api
//@todo balance
app.post("/balance", async (req, res) => {
    let pubKey = req.query.pubKey;
    let balance = (await getBalance(pubKey)).toString();
    res.send(balance);
})

//@todo on priority do sendETH & swapETH & balance api
//@todo improvement --> as we are accessing the email.json file. is it necessary to store privateKey as a cookie
//@todo res.redirect to redirect from server;

app.post("/getPubTo", (req, res) => {
    let userName = req.query.userName;

    fs.readFile('./scripts/cred.json', (err, data) => {
        // @todo there is no return for exceptional case scenerio
        if (err) throw err;
        data = JSON.parse(data)
        var count = Object.keys(data).length;
        for (const x in data) {
            if (data[x]["userName"] == userName) {
                let email = data[x]["email"];
                let filename = getFileName(email);

                fs.readFile(filename, (err, data) => {
                    data = JSON.parse(data);
                    if (err) throw err;
                    res.send(data["publicKey"]);
                })
            }
        }
    })

})


const port = 4000;
const server = app.listen(port);
console.log("listening on port: ", port)