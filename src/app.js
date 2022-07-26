const express = require('express')
const todoListRouter = require('./todoList/todoList.routers').router

const app = express()

app.use(express.json())

app.use('/api/v1',todoListRouter)

app.listen(8000, () => {
    console.log('server live')
})