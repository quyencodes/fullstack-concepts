// importing express
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// create an express app
const app = express()

// middleware (frameworks)
app.use(express.json()) // body parser
app.use(morgan()) // color coding thing
app.use(cors()) // web browser / session headers

// routes
// get
app.get('/fakeroute', (req, res) => {
  getAll() // queries are in get all and it returns information for the user
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err))
})

// post
app.post('fakeroute', (req, res) => {})

// put
app.put('fakeroute', (req, res) => {
  res.status(200).json()
})

// delete
app.delete('fakeroute', (req, res) => {
  // first error callback style (node)
  if (err) {
    res.status(400).json()
  }
  res.status(200).json()

  // promises
  getAll()
    .then(() => res.status(200).json())
    .catch((err) => console.log(err))
})

// port to listen too
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is now listening on http://localhost:${PORT}`)
})
