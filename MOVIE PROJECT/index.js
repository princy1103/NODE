import express from "express";
import dbconnect from "./db.js";
import movieROutes from "./routes/movieRoutes.js";

const app = express()
app.use(express.json())

const port = 8090

dbconnect();
app.use('/', movieROutes)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});