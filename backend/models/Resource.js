const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema(
  {
    // we don't need an ID key in here, as mongoDB
    // by default maintains an unique ID
    details: {
      name: { type: String, required: true, trim: true },
      author: { type: String, required: true, trim: true },
    },
    tags: [],
    resource_is_in_course: [], // all the courses in which this resource is being used
  }
);


const Resource = mongoose.model('Resource', ResourceSchema);
module.exports = Resource;