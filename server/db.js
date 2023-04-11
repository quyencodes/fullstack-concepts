// import mongoose
import mongoose from 'mongoose'

// create a connection to our database via unique uri
mongoose.connect('mongodb://localhost:27017/test')

// create schema
const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: String,
  watched: {
    type: Boolean,
    default: false,
  },
})

// create model
const AnimeApp = mongoose.model('Anime', animeSchema)

// export model
module.exports = {
  AnimeApp,
}
