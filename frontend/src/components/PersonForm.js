import Filter from './Filter'
import changePerson from '../services/changePerson'

const PersonForm = ({persons, setPersons, newFilter, setFilter, newName, setNewName, newNumber, setNewNumber, setErrorMessage}) => {

	const handleNewName = (event) => {
		//console.log(event.target.value)
		setNewName(event.target.value)
	}
	
	const handleNewNumber = (event) => {
		//console.log(event.target.value)
		setNewNumber(event.target.value)
	}

	//const handleDeletePerson = (event) => {
	//	console.log(event.target.value)
	//	deletePerson(event.target.value)
	//}

	const addPerson = (event) => {
		event.preventDefault()
		//console.log(newName)
		//console.log(persons)
		let names = persons.map(person => person.name)
		if (names.includes(newName)) {
			if (window.confirm(`${newName} is already in the phonebook, replace the existing number with the new number?`)) {
				const i = persons.findIndex(person => person.name === newName)
				console.log(i)
				//console.log(persons[i])
				const changedPerson = {
					name: persons[i].name,
					number: newNumber,
					id: persons[i].id,
				}
				console.log(changedPerson)
				changePerson
					.update(persons[i].id, changedPerson)
					.then(response => {
						changePerson
							.getAll()
							.then(response => setPersons(response.data))
					})
					.catch(error => {
						setErrorMessage(
							`Delete Failed: ${newName} is not found`
						)
						setTimeout(() => {
							setErrorMessage(null)
						}, 3000)
					})
			}
				setNewName('')
				return ;
		}
		const person = {
			name: newName,
			number: newNumber,
			id: persons.length + 1,
		}
		//axios
		//	.post('http://localhost:3001/persons', person)
		//	.then(response => {
		//		console.log(response)
		//		setPersons(persons.concat(person))
		//		setNewName('')
		//		setNewNumber('')
		//	})
		changePerson
			.create(person)
		setPersons(persons.concat(person))

		setErrorMessage(
			`Added ${person.name}`
		)
		setTimeout(() => {
			setErrorMessage(null)
		}, 3000)

		setNewName('')
		setNewNumber('')
		//console.log('button clicked', event.target)
	}

	//const deletePerson = (event) => {
	//	event.preventDefault()
	//}

	return (
		<form onSubmit={addPerson}>
			<Filter keyword={newFilter} setter={setFilter}/>
			<h3>Add a new</h3>				
			<div>
				name: <input
					value={newName}
					onChange={handleNewName} />
			</div>
			<div>
				number: <input
					value={newNumber}
					onChange={handleNewNumber} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm