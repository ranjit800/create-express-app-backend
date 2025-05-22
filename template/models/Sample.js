const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Sample', SampleSchema);
