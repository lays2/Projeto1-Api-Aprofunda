# 📋 Meu primeiro Projeto: API de Tarefas com Node.js

Este é um projeto de API REST criada com **Node.js** e **Express**, que simula o gerenciamento de tarefas usando dados armazenados na memória (array de objetos). A API permite listar, detalhar, criar, atualizar e deletar tarefas.

---
## Testes da API

### Requisição GET
![GET](imgs/get.png)

### Requisição POST
![POST](imgs/post.png)

### Requisição PUT
![PUT](imgs/put.png)

### Requisição DELETE
![DELETE](imgs/delete.png)



## 🚀 Funcionalidades da API

### ✅ Listar todas as tarefas

**GET** `/tasks`  
Retorna um array com todas as tarefas cadastradas.

### 🔍 Obter uma tarefa específica

**GET** `/tasks/:id`  
Retorna uma tarefa específica com base no ID informado.

### 🆕 Criar uma nova tarefa  

**POST** `/tasks`  
Cria uma nova tarefa a partir dos dados enviados no corpo da requisição (JSON).

**Exemplo de body:**

```json
{
  "title": "Estudar Node.js",
  "completed": false
}


