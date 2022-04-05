const blogsRouter = require('express').Router()
const BlogDocument = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
	const blogs = await BlogDocument.find({})
	response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
	const blog = new BlogDocument(request.body)

	try {
		const result = await blog.save()
		response.status(201).json(result)
	} catch {
		response.status(400).end()
	}
})

module.exports = blogsRouter