// console.log('Task Manager App')

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect') //you can check the correct access to db
require('dotenv').config()
const notFound = require('./middleware/non-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks')        - get all the tasks
//app.post('/api/v1/tasks')       - create a new task
//app.get('/api/v1/tasks/:id')    - get single task
//app.patch('/api/v1/tasks/:id')  - update task
//app.delete('/api/v1/tasks/:id') - delete task

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
