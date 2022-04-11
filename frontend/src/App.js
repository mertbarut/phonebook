import { useState, useEffect, useRef } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import LoginForm from './components/Login'
import loginService from './services/login'
import changePerson from './services/changePerson'
import changeBlog from './services/changeBlog'
import Notification from './components/Notification'
import axios from 'axios'

import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'

import Togglable from './components/Togglable'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setFilter] = useState('')
	const [errorMessage, setErrorMessage] = useState(null)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	const [newBlogTitle, setBlogTitle] = useState('')
	const [newBlogAuthor, setBlogAuthor] = useState('')
	const [newBlogUrl, setBlogUrl] = useState('')
	const [loginVisible, setLoginVisible] = useState(false)

	const blogFormRef = useRef()
	const personFormRef = useRef()
	const blogViewRef = useRef()

	useEffect(() => {
		axios
		  .get('/api/persons')
		  .then(response => {
			setPersons(response.data)
		  })
	}, [])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			changePerson.setToken(user.token)
		}
	}, [])

	useEffect( () => {
		blogService.getAll()
			.then(newBlogs => {
				setBlogs(newBlogs)
			})
	}, [])

	const handleLogin = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({
				username, password,
			})
			//console.log(user)
			
			window.localStorage.setItem(
				'loggedAppUser', JSON.stringify(user)
			)

			changePerson.setToken(user.token)
			changeBlog.setToken(user.token)
			setUser(user)
			setUsername('')
			setPassword('')
			} catch (exception) {
			setErrorMessage('Wrong Credentials')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
		//console.log('logging in with', username, password)
	}

	const handleLogout = async (event) => {
		event.preventDefault()
	
		window.localStorage.removeItem(
			'loggedAppUser'
		)

		setErrorMessage('Logging out...')
		setTimeout(() => {
			setErrorMessage(null)
			window.location.reload(false);
		}, 2)
	}

	const handleNewLike = (event) => {
		//console.log(event.target.id)
		likeBlog(event)
	}

	const likeBlog = async (event) => {
		event.preventDefault()

		const blogID = event.target.id
		//console.log(blogID)
		const i = blogs.findIndex(blog => blog.id === blogID)
		//console.log(i)
		const blog = {
			title: blogs[i].title,
			author: blogs[i].author,
			url: blogs[i].url,
			likes: (blogs[i].likes || 0) + 1,
			user: blogs[i].user
		}
		//console.log(blog)

		await changeBlog.update(blogID, blog)
		const newBlogs = await changeBlog.getAll()
		setBlogs(newBlogs)

	}

	const handleDeleteBlog = (event) => {
		//console.log(event.target.id)
		deleteBlog(event)
	}

	const deleteBlog = async (event) => {
		event.preventDefault()

		const blogID = event.target.id

		await changeBlog.remove(blogID)
		const newBlogs = await changeBlog.getAll()
		setBlogs(newBlogs)

	}

	const loginForm = () => {
		const hideWhenVisible = { display: loginVisible ? 'none' : '' }
		const showWhenVisible = { display: loginVisible ? '' : 'none' }
	
		return (
		  <div>
			<div style={hideWhenVisible}>
			  <button onClick={() => setLoginVisible(true)}>log in</button>
			</div>
			<div style={showWhenVisible}>
			  <LoginForm
				username={username}
				password={password}
				handleUsernameChange={({ target }) => setUsername(target.value)}
				handlePasswordChange={({ target }) => setPassword(target.value)}
				handleSubmit={handleLogin}
			  />
			  <button onClick={() => setLoginVisible(false)}>cancel</button>
			</div>
		  </div>
		)
	  }

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={errorMessage} />
			{user === null
				? loginForm()
				: 
				<div>
					<p>{user.name} logged-in <button onClick={handleLogout}>logout</button></p>
					<Togglable buttonLabel="new person" ref={personFormRef}>
						<PersonForm
						persons={persons}
						setPersons={setPersons}
						filter={newFilter}
						setFilter={setFilter}
						newName={newName}
						setNewName={setNewName}
						newNumber={newNumber}
						setNewNumber={setNewNumber}
						setErrorMessage={setErrorMessage}
						/>
					</Togglable>
					<Togglable buttonLabel="new blog" ref={blogFormRef}>
						<BlogForm
						setBlogs={setBlogs}
						blogs={blogs}
						blogFormRef={blogFormRef}
						setBlogTitle={setBlogTitle}
						newBlogTitle={newBlogTitle}
						setBlogAuthor={setBlogAuthor}
						newBlogAuthor={newBlogAuthor}
						setBlogUrl={setBlogUrl}
						newBlogUrl={newBlogUrl}
						setErrorMessage={setErrorMessage}
						/>
					</Togglable>
					<h2>Numbers</h2>
					<Persons
						persons={persons}
						filter={newFilter}
						setPersons={setPersons}
					/>
					<Blogs
						blogs={blogs}
						setBlogs={setBlogs}
						handleNewLike={handleNewLike}
						handleDeleteBlog={handleDeleteBlog}
						blogViewRef={blogViewRef}
						user={user}
					/>
				</div>
			}
		</div>
	)
}

export default App