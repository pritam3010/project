const express = require("express");

const router = express.Router();
const projectController = require("../controllers/project");
const isAuth = require("../middelware/isAuth");

router.post("/project", isAuth, projectController.createProject);
router.get("/project", isAuth, projectController.getProjects);
router.get("/project/:projectId", isAuth, projectController.getProject);
router.patch("/project/:projectId", projectController.updateProject);

module.exports = router;
