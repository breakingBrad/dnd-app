const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const LookupSchema = new Schema ({
  resourceName: String,
  resourceUrl: String,
  options: Array
});

var Lookup = mongoose.model('Lookup', LookupSchema)
module.exports = Lookup;