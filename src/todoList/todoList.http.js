const { getTodoList, getTodoListById, createNewTodoList } = require("./todoList.controllers")


const getTodo = (req,res) => {
    const data = getTodoList()
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if (id) {
        const data = getTodoListById(id)
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'id is not a number'})
    }
}


const createNew = (req, res) =>{
    const data = req.body
    if (data.title && data.description && data.status) {
        const result = createNewTodoList(data)
        res.status(200).json({
            message: 'Todo List create',
            data: result
        })
    }else{
        res.status(400).json({message: 'invalid'})
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    const resultDelete = deleteById(id)
    res.status(200).json({
        length: resultDelete.length,
        message:'Todo list delete',
        data: resultDelete
    })
}


module.exports = {
    getTodo,
    getById,
    createNew,
    deleteById

}