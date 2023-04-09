const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
       // res.status(200).json({ tasks, amound:tasks.lenght })
       // res
       // .status(200)
       // .json({ status:"success", data{tasks, nbHits:tasks.lenght} })
})

const createTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

const getTask = asyncWrapper( async (req, res, next) => {
        const { id:taskID } = req.params
        const task = await Task.findOne({ _id:taskID })
        if(!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
            //always need return
        }
        res.status(200).json({ task })
})

const deleteTask = asyncWrapper( async (req, res, next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id:taskID })
        if(!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })
        // res.status(200).send()
        // res.status(200).json({ task:null, status: 'success' })
})

const updateTask = asyncWrapper( async (req, res, next) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body,{
            new:true,
            runValidators:true
        })
        if(!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }

        res.status(200).json({ task })
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}