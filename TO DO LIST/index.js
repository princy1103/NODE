import express from 'express';
import dotenv from 'dotenv';

const app = express()

dotenv.config({
    path:'./.env'
})

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

const port = process.env.PORT

let TaskData=[]

app.get('/',(req,res)=>{
    return res.render('index', { taskdata:TaskData})
})
app.get('/addtask',(req,res)=>{
    return res.render('addTask')
})

//add task
app.post('/insertTask',(req,res)=>{
    let id = req.body.taskid
    let name = req.body.name
    let desc= req.body.desc
    let date = req.body.date
    let time = req.body.time
    let efficient= req.body.efficient


    let obj={
        id:id,
        name:name,
        desc:desc,
        date:date,
        time:time,
        efficient:efficient
    }
    TaskData.push(obj)
    console.log("Task Added");
    return res.redirect('/')
    
})
// edit taask
app.get('/edittaskData' , (req , res) => {
  let taskEditId = req.query.id

  let newEditData = TaskData.filter((val) => {
    return val.id === taskEditId
  })

  return res.render('edittask' , {
    editData:newEditData[0]
  })
})
app.post('/edittask', (req, res) => {
    let editid = req.body.editid;

    TaskData = TaskData.map((task) => {
        if (task.id == editid) {
            task.name = req.body.name;
            task.desc = req.body.desc;
            task.date = req.body.date;
            task.time = req.body.time;
            task.efficient = req.body.efficient;
        }
        return task;
    });

    console.log("Updated Task", editid);
    return res.redirect('/');
});

app.listen(port,(err)=>{
    !err?
        console.log(`Server start on port ${port}`)
        :null;        
})