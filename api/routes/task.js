const express = require("express");

const router = express.Router();

const taskController = require("../controllers/task");

router.post("/task", taskController.createTask);
router.post;

module.exports = router;
