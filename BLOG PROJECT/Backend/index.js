import express from "express";
import dbconnect from "./db.js";
import blogRoutes from './routes/blogRoutes.js'
import cors from 'cors'
const app = express()
app.use(express.json())

app.use(cors({
  origin: "*",       
}));
const port = 3040

dbconnect();
app.use('/', blogRoutes)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});