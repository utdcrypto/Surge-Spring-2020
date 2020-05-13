// importing the express module into our code
const express = require('express');

// importing web3 to use for smart contracts
const web3 = require('web3');

// sets up our HTTP connection to our local blockchain
const provider = new web3.providers.HttpProvider('http://localhost:8545');

// sets up web3 to use that http connection (aka provider)
const web3Conn = new web3(provider);

const account = web3Conn.eth.accounts.privateKeyToAccount("0xf9ce0a0e0af9697d1b540882a5b821d8714b81ed520a8c9572beb059867c3d7e")
web3Conn.eth.accounts.wallet.add(account);
web3Conn.eth.defaultAccount = account.address;

// using the filesystem module to read in the json interface for our smart contract
const fs = require('fs');

// json interface is a byte buffer (Buffer object)
const jsonInterface = fs.readFileSync('../build/contracts/TestContract.json');

// convert the Buffer into a JSON string
const jsonString = jsonInterface.toString();

// parsing our jsonString into a object interface to pass to web3
const jsonObject = JSON.parse(jsonString);

const testContract = new web3Conn.eth.Contract(jsonObject.abi, "0xCDf4FB9135C1B454a69c0799Ecd44d684b4c8EF0");
// testContract is now RPC to the actual smart contract

// -- SERVER STUFF -- //

// creating a new instance of our server
// we need to bind it to a port
const app = express();


// creating a web handler for the localhost:8080/api route
// handler takes in a request and response object
// and manipulates the response before sending it back to the user
app.get('/api/:id', (req, res) => {
    console.log(req.params, req.query)

    res.send("Hello to the api webpage");
});

app.get("/api", async (req, res) => {
    const ping = await testContract.methods.ping().call();

    const video_name = "blockchain_video_0";
    try {
        const add_video = await testContract.methods.add_video_entry(video_name).send({
            from: "0x0Ca97818eBEDC06E92Abc2b6B1bC90519D0B2fF2",
            gas: "250000",
            gasPrice: "20000000"
        });
        const check_video = await testContract.methods.check_video_entry(video_name).call();
        console.log(add_video, check_video);
    } catch (e) {
        console.error(e);
    }

    res.status(200).json({
        response: ping
    })
})

app.listen(8080, () => {
    console.log("Server is now running on port 8080");
});