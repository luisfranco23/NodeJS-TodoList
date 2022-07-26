const todoListBD = [
    {
        id: 1,
        title: '',
        desciption: '',
        status: ''
    }
]

const getTodoList = () => {
    return todoListBD
}

const getTodoListById = (id) => {
    const todoListFilter = todoListBD.filter(item => item.id === id)
    if (todoListFilter.length === 0) {
        return false
    }
        return todoListFilter[0]
}

const createNewTodoList = (todoListObj) => {
    if (todoListBD.length === 0) {
        const newTodoList ={
            id: 1,
            title: todoListObj.title,
            description: todoListObj.description,
            status: todoListObj.status
        }
        todoListBD.push(newTodoList)
        return newTodoList
    }else {
        const newTodoList ={
            id: todoListBD[todoListBD.length - 1].id +1,
            title: todoListObj.title,
            description: todoListObj.description,
            status: todoListObj.status
        }
        todoListBD.push(newTodoList)
        return newTodoList
    }
}

const deleteTodoListById = (id) => {
    if (id) {
        const index = todoListBD.findIndex(item => item.id === id)
        const result = todoListBD.splice(index, 1)
        return result
    }
}

module.exports = {
    getTodoList,
    getTodoListById,
    createNewTodoList,
    deleteTodoListById
}