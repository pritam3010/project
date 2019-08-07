const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tabSchema = new Schema({
    name: String,
    color: String,
    icon: String
});

projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        tabs: [tabSchema],
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User"
            // required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
