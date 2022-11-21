const express = require('express')

const redisClient = require('../db/redis')

const router = express.Router()

router.post('/set-string', async (req, res) => {
    const { key, value } = req.body

    try {
        const obj = await redisClient.set(key, value)

        res.send(obj)
    } catch (err) {
        console.log(err);
    }
})

router.post('/set-list', async (req, res) => {
    const { key, list } = req.body

    try {
        const obj = await redisClient.rPush(key, list)

        res.send(`${obj}`)
    } catch (err) {
        console.log(err);
    }
})

router.post('/set-hash', async (req, res) => {
    const { key, list } = req.body

    try {
        const obj = await redisClient.hSet(key, list)

        res.send(`${obj}`)
    } catch (err) {
        console.log(err);
    }
})

router.get('/get-string/:key', async (req, res) => {
    const { key } = req.params

    try {
        const value = await redisClient.get(key)

        res.send({ value })
    } catch (err) {
        res.status(500).send()
        console.log(err);
    }
})

router.get('/get-list/:list', async (req, res) => {
    const { list } = req.params

    try {
        const value = await redisClient.lRange(list, 0, -1)

        res.send({ value })
    } catch (err) {
        res.status(500).send()
        console.log(err);
    }
})

router.get('/get-hash/:hash', async (req, res) => {
    const { hash } = req.params
    const { field } = req.query

    try {
        const value = await redisClient.hGet(hash, field)
        // const value = await redisClient.hGetAll(hash)

        res.send({ value })
    } catch (err) {
        res.status(500).send()
        console.log(err);
    }
})


module.exports = router