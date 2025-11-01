const tasksModels = require("../models/tasks");

const getAllData = async(req, res) => {
    try {
        const [rows] = await tasksModels.getAllData();
        res.json({
            message: "Get All Data",
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}

const createTask = async(req, res) => {
    try {
        const { body } = req
        await tasksModels.createTask(body)
        res.json({
            message: "Create Task Success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}

const updateTask = async(req, res) => {
    try {
        const { id } = req.params
        const { body } = req
        await tasksModels.updateTask(id, body)
        res.json({
            message: "Update Task Success",
            data: {
                id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}

const deleteTask = async(req, res) => {
    try {
        const { id } = req.params
        const [body] = await tasksModels.deleteTask(id)

        if (body.affectedRows === 0){
            res.status(404).json({
                message: "ID Was Not Found"
            })
        }
        res.json({
            message: "Delete Transaction Success",
            delete_id: id
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}

module.exports = {
    getAllData,
    createTask,
    updateTask,
    deleteTask
}