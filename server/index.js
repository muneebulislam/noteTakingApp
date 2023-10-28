const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const {config} = require('dotenv');
const { Pool } = require('pg');
config();
// midleware for cors
app.use(cors());
//To get the data from the request body
app.use(express.json());
//create 
app.post('/create', async(req, res) => {
    try {
        const {description} = req.body;
        console.log(description);
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        // res.json(newTodo.rows[0]);

        
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/todos', async (req, res) =>{
    try {
        const curTodos = await pool.query("SELECT * FROM todo");
        res.json(curTodos.rows);
        
    } catch (error) {
        console.log(error.message);
        
    }
})
app.get('/todos/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const todWithId = await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(todWithId);
        
    } catch (error) {
        console.log(error.message);
        
    }
})

app.put('/todos/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const todWithId = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2" ,[description,id]);
        res.json("Updated the table");
        
    } catch (error) {
        console.log(error.message);
        
    }
})

app.delete('/todos/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const todWithId = await pool.query("DELETE FROM todo WHERE todo_id = $1" ,[id]);
        res.json("deleted");
        
    } catch (error) {
        console.log(error.message);
        
    }
})






app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
})