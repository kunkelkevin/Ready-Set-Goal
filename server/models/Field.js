const mongoose = require("mongoose");

const { Schema } = mongoose;

const fieldSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String,
    required: true,
    enum: ["Grass", "Turf"],
    default: "Grass",
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
});

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;
