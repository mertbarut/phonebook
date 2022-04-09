import changeBlog from '../services/changeBlog'

const BlogForm = ({blogs, setBlogs, blogFormRef, setBlogTitle, newBlogTitle, setBlogAuthor, newBlogAuthor, setBlogUrl, newBlogUrl, setErrorMessage}) => {

	const handleNewBlogTitle = (event) => {
		setBlogTitle(event.target.value)
	}
	
	const handleNewBlogAuthor = (event) => {
		setBlogAuthor(event.target.value)
	}

    const handleNewBlogUrl = (event) => {
		setBlogUrl(event.target.value)
	}
	
	const addBlog = (event) => {
		event.preventDefault()
		const blog = {
			title: newBlogTitle,
			author: newBlogAuthor,
			url: newBlogUrl,
			likes: 0
		}
		blogFormRef.current.toggleVisibility()
		changeBlog
			.create(blog)
			.then(response => {
				setBlogs(blogs.concat(response.data))
				setErrorMessage(
					`Added a new blog!`
				)
				setTimeout(() => {
					setErrorMessage(null)
				}, 3000)
				setBlogTitle('')
				setBlogAuthor('')
                setBlogUrl('')
			})
			.catch(error => {
				setErrorMessage(
					`ValidationError: Blog validation failed.`
				)
				setTimeout(() => {
					setErrorMessage(null)
				}, 3000)
				setBlogTitle('')
				setBlogAuthor('')
                setBlogUrl('')
			})
	}

	return (
		<form onSubmit={addBlog}>
			<h3>Add a new blog</h3>				
			<div>
				title: <input
					value={newBlogTitle}
					onChange={handleNewBlogTitle} />
			</div>
			<div>
				author: <input
					value={newBlogAuthor}
					onChange={handleNewBlogAuthor} />
			</div>
            <div>
				url: <input
					value={newBlogUrl}
					onChange={handleNewBlogUrl} />
			</div>
			<div>
				<button type="submit">create</button>
			</div>
		</form>
	)
}

export default BlogForm