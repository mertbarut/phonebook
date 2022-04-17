import React from 'react'
import '../css/Blog.css'
import Togglable from './Togglable'

const blog_styles = {
	header: "text-2xl",
	body: "flex justify-around m-5 bg-slate-200 rounded-lg border border-primaryBorder shadow-default py-8 px-5",
	title: "flex justify-center text-xl",
	button_view: `bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`
}

const Blog = ({blog, handleNewLike, blogViewRef, handleDeleteBlog, user}) => {

	//console.log(user.username)
	//console.log(blog.user.username)

	return (
		<div className={blog_styles.body}>
    	<p className={blog_styles.title}>
				{blog.title} by {blog.author}
			</p>
			<p>
				<Togglable buttonLabel="view" ref={blogViewRef}>
					{user.username === blog.user.username
						?
						<button id={blog.id} className='delete-button' onClick={handleDeleteBlog}>delete</button>
						:
						<br/>
					}
					<br/>
					{blog.url}
					<br/>
					likes: {blog.likes} <button id={blog.id} className='like-button' onClick={handleNewLike}></button>
					<br/>
					Added by: {blog.user.name}
					<br/>
				</Togglable>
			</p>
    	</div>
	)
}

const Blogs = ({blogs, handleNewLike, handleDeleteBlog, blogViewRef, user}) => {
	blogs.sort((a, b) => b.likes - a.likes)
	return (
    <div>
    	<h2>Blogs</h2>
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