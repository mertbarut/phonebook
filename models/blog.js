const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'A title is required'],
		minlength: 1
	},
	author: {
		type: String,
		required: [true, 'An author is required'],
		minlength: 3
	},
	url: String,
	likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)
