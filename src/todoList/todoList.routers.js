const router = require('express').Router()
const httpTodoList = require('./todoList.http')

router.route('/todoList')
    .get(httpTodoList.getTodo)
    .post(httpTodoList.createNew)

router.route('/todoList/:id')
    .delete(httpTodoList.deleteById)
    .get(httpTodoList.getById)
    .put()

module.exports = {
    router
}