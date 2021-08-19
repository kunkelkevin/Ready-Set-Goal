const mongoose = require("mongoose");

const { Schema } = mongoose;

const fieldSchema = new Schema({
        fieldType: {
          type: String,
          required: true,
          enum: ["Grass", "Turf"],
          default: "Grass",
        },
    //     comments: [
    //       {
    //         type: Schema.Types.ObjectId,
    //         ref: "Comment",
    //       },
    //     ],
    //   },
    //   {
    //     toJSON: {
    //       virtuals: true,
    //       getters: true,
    //     },
    //     // prevents virtuals from creating duplicate of _id as `id`
    //     id: false,
    //   }
});

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;
