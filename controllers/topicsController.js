const Topic = require("../models/topic");

module.exports = {
  createNewTopic: (req, res) => {
    // let newTopic = {
    //   topicName: req.body.topicName,
    // };
    try {
      let topic = new Topic();
      console.log(topic);
      //Topic.create(newTopic);
      topic["topicName"] = req.body.topicName;
      topic["user"] = req.user._id;

      topic.save().then((doc) => {
        res.send(doc);
      });
    } catch (x) {
      console.log("there was an error above");
    }
  },

  findTopicByUser: (req, res) => {
    Topic.find({ user: req.user._id }).then((doc) => {
      res.send(doc);
    });
  },

  findTopicById: (req, res) => {
    Topic.find({ _id: req.params.id }).then((topic) => {
      res.send(topic);
    });
  },

  deleteTopic: (req, res) => {
    Topic.findByIdAndRemove({ _id: req.params.id }).then((doc) =>
      res.send(doc)
    );
  },
};
