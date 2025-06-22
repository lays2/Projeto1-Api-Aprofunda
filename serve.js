const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());    

//Configuração do servidor
const port = 3000;

//Dados em memória 

let tasks = [
    {id: 1, title: "estudar Node.js", completed: false },
    {id: 2, title: "estudar Express.js", completed:true }

];

//GET/Tasks - lista todas as tarefas

app.get('/', (req, res) =>{
    res.send('Bem-vindo à API de tarefas!');
    res.json(tasks);
});

//GET/tasks/:id - detalhar uma tarefa por ID 
app.get('/tasks/:id', (req, res) =>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Tarefa não encontrada" });
    res.json(task);
});

//POST/tasks - criar uma nova tarefa
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//PUT/tasks/:id - atualizar uma tarefa 
app.put('/tasks/:id', (req, res) =>{
    const task = tasks.find( t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({message: "Tarefa não encontrada"});

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

//delete/tasks/:id - deletar uma tarefa

app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Tarefa não encontrada" });
    tasks.splice(index, 1);
    res.status(204).send(); // No Content
});
    
//Iniciar o servidor
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});