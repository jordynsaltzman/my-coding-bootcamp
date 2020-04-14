const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  topicName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
