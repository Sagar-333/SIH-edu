const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema(
  {
    UID: { type: String, required: true }, // we'll keep an UID here to keep things easy to track.
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