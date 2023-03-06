const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },

  japantitle: {
    type: String,
    required: true
  },

  poster: {
    type: String,
    required: true
  },

  status: {
    type: String, 
    required: true,
    enum: ['Ongoing', 'Completed', 'Upcoming'],
    default: 'Upcoming',
  },

  premiered: {
    type: Date,
    default: Date.now
  },

  studio: {
    type: Schema.Types.ObjectId,
    ref: "Studios",
    required: true
  },

  description: {
    type: String,
    required: true
  },

  genres: {
    genre: [{
      type: Schema.Types.ObjectId, 
      ref: "Genres", 
      required: true,
      default: 'No definition'
    },]
  },
});

schema.virtual("url").get(function() {
  return `/catalog/anime${this._id}`;
});

module.exports = mongoose.model('Anime', schema);