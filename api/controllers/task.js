const User = require("../modals/user");
const Project = require("../modals/project");
const Task = require("../modals/task");

exports.createTask = async (req, res, next) => {
    const taskName = req.body.name;
    const tabName = req.body.tab;
    const newTask = new Task({
        name: taskName,
        tab: tabName
    });
    try {
        const task = await newTask.save();
        res.status(201).json({
            message: "Task created successfully",
            task: task
        });
    } catch (err) {
        if (!err.statusCode) {
            console.log(err);
            err.statusCode = 500;
        }
        next();
    }
};
