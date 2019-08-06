const express = require('express')
const bodyParser = require('body-parser')

const app = express() 

const router = express.Router()

app.use(bodyParser.json())


let tasks = [
    {
        "id": 0,
        "title": "Dry shoes",
        "person": "Jimmy",
        "done": true
    }
]

app.get("/", (req, res) => {
    console.log("I am console logging")
    res.send("Hello world")
})

// List all the todos
router.get('/', function(req, res){
    res.send(tasks)

})

// Add a todo
router.post('/', function(req, res){
    console.log(req.body)
    let task = req.body
    task.id = tasks.length
    tasks.push(task)
    res.send(task)
})

// Update a todo
router.put('/:id', function(req, res){
    let id = req.params.id
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i] = req.body
            tasks[i].id = id

        }
    }
    res.send("Done")
    // tasks.push(req.body)
    // res.send(tasks)
})





app.use("/tasks", router)
const PORT = (process.env.PORT) ? process.env.PORT : 8000 
app.listen(PORT, () => {
	console.log(`app listening on ${PORT}`)
})
