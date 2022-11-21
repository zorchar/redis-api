const express = require('express')
const cors = require('cors')

const port = process.env.port
const redisRouter = require('./routers/redisRouter')

const app = express()
app.use(cors())
app.use(express.json())
app.use(redisRouter)

app.use('/', (_, res) => {
    res.send()
})



app.listen(port, () => console.log(`server connected, port: ${port}`))