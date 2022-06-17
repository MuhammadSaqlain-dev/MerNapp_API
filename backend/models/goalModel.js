const mongoose = require("mongoose");

// Am not getting "createdAt" & "modifiedAt" properties
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timeStamps: true,
  }
);

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;
