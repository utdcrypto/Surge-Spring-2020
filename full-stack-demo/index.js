const express = require('express');
const app = express();
const cors = require('cors');

const redis = require('redis');

const path = require('path');

app.use(cors());
app.use(express.static('full-stack/build'));

const redisClient = new redis.createClient({
    host: '67.205.151.206'
});

redisClient.ping((err, payload) => {
    console.log('ERROR', err)
    console.log('Redis ping', payload)
})

app.get('/api/redis/set', (req, res) => {
    //http://google.com?id=1234&search=ilikepie
    // query: id = 1234
    // query: search = ilikepie
    const key = req.query.key;
    const value = req.query.value;

    console.log(key, value)

    redisClient.set(key, value, () => {
        console.log("Set value in redis server");
        // 200 means good
        res.status(200).json({
            response: value
        })
    })
})

app.get('/api/redis/get', (req, res) => {
    const key = req.query.key;

    redisClient.get(key, (value) => {
        res.status(200).json({
            response: value
        })
    })
})



app.get('/api/home', (req, res) => {
    res.json({
        data: 'hello'
    })
})

// app.get('/', (req, res) => {
//     res.send('hi');
// })


app.listen(8000, () => {
    console.log('App is listening');
});