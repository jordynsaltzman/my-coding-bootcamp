const Resource = require("../models/resource");
const Topic = require("../models/topic");

module.exports = {
  findAllResources: (req, res) => {
    Resource.find({ topic: req.params.id })
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => res.status(422).json(err));
  },

  createNewResource: (req, res) => {
    let resource = new Resource();

    let newResource = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      topic: req.body.topic,
      type: req.body.type,
      completed: req.body.completed,
    };

    const { title, description, url, type, topic, completed } = req.body;

    resource["title"] = title;
    resource["description"] = description;
    resource["url"] = url;
    resource["type"] = type;
    resource["completed"] = completed;
    resource["topic"] = topic;

    resource.save().then((doc) => {
      Topic.findOne({ _id: topic })
        .then((topic) => {
          topic.resources.push(doc);
          topic.save();
        })
        .catch((err) => res.status(422).json(err));
    });

    Resource.create(newResource)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(422).json(err));
  },

  findResourceById: (req, res) => {
    Resource.findOne({ _id: req.params.id });
  },

  updateResource: (req, res) => {
    Resource.findOneAndUpdate(
      { _id: req.body.id },
      { completed: req.body.completed }
    )
      .then((doc) => res.send(doc))
      .catch((err) => res.status(422).json(err));
  },

  removeResource: function (req, res) {
    Resource.findByIdAndRemove({ _id: req.body.resource })
      .then((doc) =>
        Topic.findOne({ _id: req.body.topic }).then((topic) => {
          let newResources = [];
          topic.resources.forEach((resource, i) => {
            console.log(i, resource["_id"], doc["_id"]);
            if (req.body.resource != resource._id) {
              newResources.push(resource);
            }
          });

          topic.resources = newResources;
          topic.markModified("resources");
          topic
            .save()
            .then((doc) => {
              res.send(doc);
            })
            .catch((err) => res.status(422).json(err));
        })
      )
      .catch((err) => res.status(422).json(err));
  },
};
