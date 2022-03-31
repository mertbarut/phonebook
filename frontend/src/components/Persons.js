import changePerson from "../services/changePerson"

const Persons = ({persons, filter, setPersons}) => {

	let filteredPersons = persons.filter(
		person => person.name.toLowerCase().includes(filter.toLowerCase())
	)

	const handleDeletePerson = (event) => {
		console.log(event.target.id)
		if (window.confirm(`Delete ${event.target.name}?`))
			deletePerson(event)
	}

	const deletePerson = (event) => {
		const userID = event.target.id
		changePerson
			.remove(event.target.id)
			.then(response => {
				changePerson
					.getAll()
					.then(response => setPersons(response.data.filter(person => person.id !== userID)))
			.catch(error => {
				alert("Delete Failed: User is no longer present in the database")
			})
		})
	}

	return (
		<>
		{filteredPersons.map(person => 
			<li key={person.id}>
					{person.name} {person.number} &nbsp;
					<button
						type='click'
						id={person.id}
						name={person.name}
						onClick={handleDeletePerson}
					>delete
					</button>
			</li>)}
		</>
	)
}

export default Persons