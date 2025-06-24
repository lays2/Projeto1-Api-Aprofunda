// Projeto: API de Tarefas
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); // Middleware para analisar o corpo das requisições JSON
app.use(cors());         // Middleware para permitir requisições de diferentes origens (CORS)

//Configuração do servidor
const port = 3000;

//Dados em memória 

let tasks = [
    {id: 1, title: "estudar Node.js", completed: false },
    {id: 2, title: "estudar Express.js", completed:true }

];

//GET / - rota raiz
app.get('/', (req, res) => {   
    res.send("Bem-vindo à API de Tarefas!");
   
});

// GET /tasks - listar todas as tarefas
app.get('/tasks', (req, res) => {
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
    res.status(201).json(newTask); // Retorna a nova tarefa criada com status 201 (Created)
});

//PUT/tasks/:id - atualizar uma tarefa 
app.put('/tasks/:id', (req, res) =>{
    const task = tasks.find( t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({message: "Tarefa não encontrada"});

    // Atualiza apenas se o valor for fornecido no corpo da requisição (usa ?? para nullish coalescing)
    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;
    
    res.json(task);
});

//DELETE /tasks/:id - deletar uma tarefa
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Tarefa não encontrada" });
    tasks.splice(index, 1); // Remove a tarefa do array
    res.status(204).send(); // Retorna status 204 (No Content) para deleção bem-sucedida
});
    
//Iniciar o servidor
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});