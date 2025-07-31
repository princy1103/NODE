import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config({
    path: './.env'
})

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const port = process.env.PORT

const UserData = []

app.get('/', (req, res) => {
    return res.render('index')
})
app.get('/home', (req, res) => {
    return res.render('Home')
})
app.get('/form', (req, res) => {
    return res.render('Form', { userdata: UserData })
})

// inser user data
app.post('/insertUser', (req, res) => {
    let id = req.body.userid
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    let obj = {
        id: id,
        name: name,
        email: email,
        password: password
    }

    UserData.push(obj)

    console.log("Data Succesfully Added!!");

    return res.redirect('/form')
})

// Edit user
// app.post('/updateUser', (req, res) => {
//     let id = req.body.userid
//     let name = req.body.name
//     let email = req.body.email
//     let password = req.body.password

//     let userToUpdate = UserData.filter(user => user.id === id)[0]

//     if (userToUpdate) {
//         userToUpdate.name = name
//         userToUpdate.email = email
//         userToUpdate.password = password
//         console.log("Data Successfully Updated!!")
//     } else {
//         console.log("User not found")
//     }
//     return res.redirect('/form')
// })

app.get('/editUser', (req, res) => {
    let editId = req.query.id

    let newEditdata = UserData.filter((val) => {
        return val.id === editId
    })

    return res.render('editUser',{
        editData:newEditdata[0]
    })
})
app.listen(port, (err) => {
    !err ?
        console.log(`Server start on ${port}`)
        : null;
})

