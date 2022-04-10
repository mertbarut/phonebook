import React from 'react'
import '../css/Blog.css'
import Togglable from './Togglable'

const Blog = ({blog, handleNewLike, blogViewRef, handleDeleteBlog, user}) => {

	//console.log(user.username)
	//console.log(blog.user.username)

	return (
		<div className='display-blog'>
    	    <em>{blog.title}</em> by {blog.author} 
			<Togglable buttonLabel="view" ref={blogViewRef}>
				<br/>
				{blog.url}
				<br/>
				likes: {blog.likes} <button id={blog.id} className='like-button' onClick={handleNewLike}>like</button>
				<br/>
				Added by: {blog.user.name}
				<br/>
				{user.username === blog.user.username
					?
					<button id={blog.id} className='delete-button' onClick={handleDeleteBlog}>delete</button>
					:
					<br/>
				}
			</Togglable>
    	</div>
	)
}

const Blogs = ({blogs, handleNewLike, handleDeleteBlog, blogViewRef, user}) => {
	blogs.sort((a, b) => b.likes - a.likes)
	return (
    	<div>
    	<h2>blogs</h2>
    	{blogs.map(blog =>
        	<Blog 
			key={blog.id}
			blog={blog}
			blogViewRef={blogViewRef}
			handleNewLike={handleNewLike}
			handleDeleteBlog={handleDeleteBlog}
			user={user}
			/>
    	)}
    	</div>
	)
}

export default Blogs