const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
	id: String,
    name: {
		type: String,
		required: [true, 'User name required'],
		minlength: 3
	},
    number:  {
		type: String,
		required: [true, 'User phone number required'],
		minlength: 8
	},
  })

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Person', personSchema)