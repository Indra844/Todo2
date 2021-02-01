const express = require('express');
const connectDb = require('./DB/connection')
const cors = require('cors');
const bodyparser = require('body-parser');
const todoRoutes = express.Router();
let Todo=require('./todo-model');

const app = express();

connectDb();
const PORT = 4000;

app.use(cors());
app.use(bodyparser.json());

// ("/") endpoint gives all todo items--
todoRoutes.route('/').get(function(req,res){
    Todo.find(function(err,todo){
        if(err){
            console.log(err);
        }
        else{
            res.json(todo);
        }
    });
});

//("/:id") endpoint gives specific item--
todoRoutes.route('/:id').get(function(req,res){
    let id =req.params.id;
    Todo.findById(id,function(err,todo){
        res.json(todo);
    })
});

//("/add") endpoint is to add new todo item-->
todoRoutes.route('/add').post(function(req,res){
    let todo=new Todo(req.body);
    todo.save().then(todo =>{
        res.status(200).json({'todo':'todo added!'})
    })
    .catch(err =>{
        res.status(400).send('Failed')
    })

});

//("/udate/:id") endpoint update the specific item-->
todoRoutes.route('/update/:id').post(function(req,res){
    Todo.findById(req.params.id,function(err,todo){
        if(!todo)
        res.status(400).send("Not Found")
        else
        todo.description = req.body.description;
        todo.responsibility = req.body.responsibility;
        todo.priority = req.body.priority;
        todo.completed = req.body.completed;
    
    todo.save().then(todo =>{
        res.json("Todo Updated")
    })
    .catch(err =>{
        res.status(400).send("error");
    })
    });
});


app.use('/todo',todoRoutes);

app.listen(PORT,function(){
    console.log("Server running on port "+PORT)
});