const db = require("../utils/db");

const getAllData = () => {
    const sqlQuery = `
        SELECT * FROM tasks
    `;
    return db.execute(sqlQuery);
}

const createTask = (body) => {
    const sqlQuery = `
        INSERT INTO tasks (title, description, status, priority, due_date)
        VALUES (?, ?, ?, ?, ?)
    `
    return db.execute(sqlQuery, [body.title, body.description, body.status, body.priority, body.due_date])
}

const updateTask = (id, body) => {
    const sqlQuery = `
        UPDATE tasks
        SET title=?,
            description=?,
            status=?,
            priority=?,
            due_date=?
        WHERE id = ?
    `
    return db.execute(sqlQuery, [body.title, body.description, body.status, body.priority, id])
}

const deleteTask = (id) => {
    const sqlQuery = `
        DELETE FROM tasks WHERE id = ?
    `
    return db.execute(sqlQuery, [id])
}

module.exports = {
    getAllData,
    createTask,
    updateTask,
    deleteTask
}