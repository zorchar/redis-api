const redis = require('redis')

const redisClient = redis.createClient()

redisClient.connect()

module.exports = redisClient

// const redis = require('redis')
// const { promisifyAll } = require('bluebird')

// promisifyAll(redis)

// const redisClient = redis.createClient({
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,
// })