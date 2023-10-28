let fs = require("fs");

function addUserCred(email, userName) {
    fs.readFile('./scripts/cred.json', (err, cred) => {
        if (err) throw err;
        cred = JSON.parse(cred)
        var count = Object.keys(cred).length;
        count++;
        var userId = "user" + count
        cred[userId] = { "email": email, "userName": userName };
        cred = JSON.stringify(cred)
        fs.writeFile('./scripts/cred.json', cred, (error) => {
            if (error) throw error;
            console.log("Succesfully added credentials")
        })
    })
}

function createUserFile(filename /**filename = email */, publicKey, privateKey, smartAccAddress, isInitated = false) {
    var data = {
        "publicKey": publicKey,
        "privateKey": privateKey,
        "isInitiated": isInitated,
        "smartAccAddress": smartAccAddress
    }
    data = JSON.stringify(data)
    filename = getFileName(filename)
    fs.appendFile(filename, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function updateUserFile(filename, publicKey, privateKey, smartAccAddress, isInitated = true) {
    var data = {
        "publicKey": publicKey,
        "privateKey": privateKey,
        "isInitiated": isInitated,
        "smartAccAddress": smartAccAddress
    }
    data = JSON.stringify(data)
    filename = getFileName(filename)

    fs.writeFile(filename, data, function (err) {
        if (err) throw err;
        console.log("updated");
    })
}

function getFileName(filename) {
    return './scripts/accountCred/' + filename + '.json'
}

function checkUser(data, email) {
    for (const x in data) {
        if (data[x]["email"] == email) {
            return true
        }
    }
    return false
}

module.exports = { addUserCred, createUserFile, updateUserFile, checkUser, getFileName };