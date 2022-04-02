const personsRouter = require('express').Router()
const PersonDocument = require('../models/person')

personsRouter.get('/', (request, response) => {
	PersonDocument
		.find({})
		.then(persons => {
			response.json(persons)
		})
})

personsRouter.get('/:id', (request, response, next) => {
	PersonDocument
		.findById(request.params.id)
		.then(person => {
			if (person) {
				response.json(person)
			} else {
				response.status(404).end()
			}
		})
		.catch(error => next(error))
})

personsRouter.post('/', (request, response, next) => {
	const body = request.body
  
	const person = new PersonDocument({
		name: body.name,
		number: body.number,	  
	})

	person
		.save()
		.then(person => {
			response.json(person)
		})
		.catch(error => next(error))
})

personsRouter.delete('/:id', (request, response, next) => {
	PersonDocument
		.findByIdAndRemove(request.params.id)
		.then(() => {
			response.status(204).end()
		})
		.catch(error => next(error))
})

personsRouter.put('/:id', (request, response, next) => {
	const body = request.body

	const person = {
		id: body.id,
		name: body.name,
		number: body.number
	}
  
	PersonDocument
		.findByIdAndUpdate(request.params.id, person, {new: true, runValidators: true, context: 'query'})
		.then(updatedPerson => {
			response.json(updatedPerson)
		})
		.catch(error => next(error))
})

module.exports = personsRouter