const mongoose = require("mongoose");

const GratitudeSchema = new mongoose.Schema({
  grad1: {
    type: String,
    required: true,
  },
  grad2: {
    type: String,
    require: true,
  },
  grad3: {
    type: String,
    require: true,
  },
  grad4: {
    type: String,
    required: true,
  },
  grad5: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Gratitude", GratitudeSchema);
