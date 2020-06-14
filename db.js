const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://chidi:unhack5683@test-cdkkc.mongodb.net/test?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log("connected to db!")
);
