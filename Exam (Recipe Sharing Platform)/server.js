import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import connectDB from './src/Database/db.js'

//env config
env.config({
    path:'./.env'
})

const app = express()

//allow origin
app.use(cors({
  origin:'*',
}))

//Make port
const port = process.env.PORT || 3000

//Databse Connection
connectDB()

//port listen
app.listen(port , () => {
  console.log(`Server running on port ${port} `);
})