const express = require('express')
const app = express()
const port = 3000


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
  res.send('Hello World!!')
})

app.get('/todos', (req, res) => {
  res.send(todos)
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})