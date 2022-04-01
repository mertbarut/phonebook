import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setFilter] = useState('')
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		console.log('effect')
		axios
		  .get('/api/persons')
		  .then(response => {
			console.log('promise fulfilled')
			setPersons(response.data)
		  })
	}, [])

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={errorMessage} />
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
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				filter={newFilter}
				setPersons={setPersons}
			/>
		</div>
	)
}

export default App