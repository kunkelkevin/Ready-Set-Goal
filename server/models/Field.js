const mongoose = require("mongoose");

const { Schema } = mongoose;

const fieldSchema = new Schema({});

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;
