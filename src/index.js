const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const path = require("path")
dotenv.config({ path: path.resolve(__dirname, ".env")});

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const host = process.env.HOST;
const port = process.env.PORT;


const tasksRoutes = require("./routes/tasks");
app.use("/api", tasksRoutes)

app.listen(port, () => {
    console.log(`[+]Server Running in http://${host}:${port}`)
});

