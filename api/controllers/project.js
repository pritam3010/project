const User = require("../modals/user");
const Project = require("../modals/project");

exports.createProject = async (req, res, next) => {
    console.log("somone accessed post route");
    const projectName = req.body.name;
    const projectDesc = req.body.desc;
    //Create project in DB
    const newProject = new Project({
        name: projectName,
        desc: projectDesc,
        creator: req.userId
    });
    try {
        const project = await newProject.save();
        // console.log(project);
        res.status(201).json({
            message: "Project Created Successfully,",
            project: newProject
        });
    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next();
    }
};

exports.getProjects = async (req, res, next) => {
    // const projectId = req.params.projectId;
    try {
        const projects = await Project.find();
        res.status(200).json({
            message: "Fetched project successfully",
            projects: projects
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next();
    }
};

exports.getProject = async (req, res, next) => {
    res.json({ hi: "Hello" });
};

exports.updateProject = async (req, res, next) => {
    console.log("someoneAccess update project route");
    res.json({
        message: `You successfully update the project with Projec Id ${
            req.params.projectId
        }`
    });
};
