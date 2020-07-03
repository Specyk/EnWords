const mongoose = require("mongoose")

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

module.exports = {
  connectDb: async () =>
    mongoose.connect("mongodb://localhost/enwords_test", dbOptions),
  closeDb: async () => mongoose.connection.close(),
}
