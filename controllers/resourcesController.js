const Resource = require("../models/resource");

module.exports = {
  findAllResources: (req, res) => {
    Resource.find({ user: req.params.userId })
      .then((items) =>
        res.status(200).json({
          resources: items.map((item) => {
            return {
              _id: item._id,
              title: item.title,
              description: item.description,
              url: item.url,
              subject: item.subject,
              completed: item.completed,
            };
          }),
        })
      )
      .catch((err) => res.status(422).json(err));
  },

  createNewResource: (req, res) => {
    let newResource = {
      _id: req.body._id,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      subject: req.body.subject,
      completed: req.body.completed,
      userId: req.params.userId,
    };

    Resource.create(newResource)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(422).json(err));
  },

  // findById: (req, res) => {
  //   db.Resource.findById(req.params.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  //   update: (req, res) => {
  //     Resource.findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then((dbModel) => res.json(dbModel))
  //       .catch((err) => res.status(422).json(err));
  //   },

  //   remove: function (req, res) {
  //     Resource.findById({ _id: req.params.id })
  //       .then((dbModel) => dbModel.remove())
  //       .then((dbModel) => res.json(dbModel))
  //       .catch((err) => res.status(422).json(err));
  //   },
};
