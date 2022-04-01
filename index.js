require('dotenv').config()
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const PersonDocument = require('./models/person')
const { replaceOne } = require('./models/person')

const app = express()

morgan.token('body', function (req, res) { 
    return [
        JSON.stringify(req.body)
    ] 
})

const errorHandler = (error, request, response, next) => {
  console.error(error)
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' })
    next(error)
  }  
}

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())
app.use(express.static('build'))
app.use(errorHandler)

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateId = () => {
    const maxId = persons.length > 0 
      ? Math.max(...persons.map(n => n.id)) 
      : 0

    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    //console.log(body)
  
    if (!body.name || !body.number) {
      return response.status(400).json({
        error: 'content missing'
      })
    }
    let names = persons.map(person => person.name)
    if (body.name && names.includes(body.name)) {
        return response.status(400).json({
          error: 'name must be unique'
        })
      }
  
    const person = new PersonDocument({
      id: generateId(),
      name: body.name,
      number: body.number,      
    })

    person.save().then(person => {
      response.json(person)
    })
})

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/persons', (request, response) => {
  PersonDocument.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
    `)
})

app.get('/api/persons/:id', (request, response, next) => {
    PersonDocument.findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(person)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
    id: body.id
  }

  PersonDocument.findByIdAndUpdate(request.params.id, note, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  PersonDocument.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
