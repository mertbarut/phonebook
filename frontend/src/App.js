import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import loginService from './services/login'
import changePerson from './services/changePerson'
import Notification from './components/Notification'
import axios from 'axios'

import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'

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

	useEffect(() => {
		console.log('effect')
		axios
		  .get('/api/persons')
		  .then(response => {
			console.log('promise fulfilled')
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

	useEffect(() => {
		blogService
			.getAll()
			.then(blogs => setBlogs(blogs))
	}, [])

	const handleLogin = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({
				username, password,
			})
			console.log(user)
			
			window.localStorage.setItem(
				'loggedAppUser', JSON.stringify(user)
			)

			changePerson.setToken(user.token)
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

	const loginForm = () => (
		<form onSubmit={handleLogin}>
		<div>
			username
			<input
			type="text"
			value={username}
			name="Username"
			onChange={({target}) => setUsername(target.value)}
			/>
		</div>
		<div>
		password
			<input
			type="password"
			value={password}
			name="Password"
			onChange={({target}) => setPassword(target.value)}
			/>
		</div>
		<div>
			<button type="submit">login</button>
		</div>
		</form>
	)

	const personForm = () => (
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
	)

	const blogForm = () => (
		<BlogForm
		setBlogs={setBlogs}
		blogs={blogs}
		setBlogTitle={setBlogTitle}
		newBlogTitle={newBlogTitle}
		setBlogAuthor={setBlogAuthor}
		newBlogAuthor={newBlogAuthor}
		setBlogUrl={setBlogUrl}
		newBlogUrl={newBlogUrl}
		setErrorMessage={setErrorMessage}
		/>
	)

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={errorMessage} />
			{user === null
				? loginForm()
				: 
				<div>
					<p>{user.name} logged-in <button onClick={handleLogout}>logout</button></p>
					{personForm()}
					{blogForm()}
				</div>
				}
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				filter={newFilter}
				setPersons={setPersons}
			/>
			<Blogs blogs={blogs}/>
		</div>
	)
}

export default App