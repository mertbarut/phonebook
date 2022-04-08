import React from 'react'

const Blog = ({blog}) => (
    <div>
        <em>{blog.title}</em> by {blog.author}
    </div>
)

const Blogs = ({blogs}) => (
    <div>
    <h2>blogs</h2>
    {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
    )}
    </div>
)

export default Blogs