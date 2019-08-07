const mongoose = require("mongoose");

const Schema = mongoose.Schema;

taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: String,
        tab: {
            type: String,
            required: true
        },
        checklist: Array,
        attachment: String,
        assignedTo: Array,
        markedAs: String,
        dueDate: Date,
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
