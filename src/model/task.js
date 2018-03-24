module.exports = function () {
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  let db

  if (!db) {
    db = mongoose.connect('mongodb://Fairplaay:huraCAN123@ds123399.mlab.com:23399/crudnodejesusg')
  }

  var Task = new Schema({
    title: String,
    description: String,
    status: Boolean
  })
  return mongoose.model('task', Task)
}
