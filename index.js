const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const uuid = require('uuid')
const ejs = require('ejs');

app.use(express.json())
app.use(express.static('public'));
app.set('view engine', 'ejs')



const todos = [ {
  id: 1,
  desc: "write html",
  completed: false

},{
  id: 2,
  desc: "write java",
  completed: true
}
 
]

app.get('/', (req, res) => {
  res.render('index',  { todos: todos });
});


app.get('/', (req, res) => {
  res.send('Hello World!!')
})


// app.get('/todos', (req, res) => {
//   res.render('index', { todos: todos }); 
// });









app.get('/todos', (req, res) => {
  res.send(todos)
})

app.get('/todos/:id', (req, res) => {
  console.log(req.params.id);
  let todo = todos.filter((todo) => todo.id == req.params.id)
  res.json(todo)
})

app.post('/todos', (req, res) => {
  let body = req.body
  console.log(body);
  todos.push({id: uuid.v4(),...body})
  res.json(todos)
})

app.put('/todos/:id', (req, res) => {
  let todo = todos.find(todo => todo.id == req.params.id)
  if (todo) {
    todo.desc = req.body.desc
    todo.completed = req.body.completed
    res.json(todos)
  } else {
    res.send('Todo with id does not exist')
  }
})

app.delete('/todos/:id', (req, res) => {
  let index = todos.findIndex((todo) => todo.id ==req.params.id)
  todos.splice(index, 1)
  res.json(todos)
  res.json([])
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})