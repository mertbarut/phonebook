const Filter = ({keyword, setter}) => {
	const handleFilter = (event) => {
		//console.log(event.target.value)
		setter(event.target.value)
	}

	return (
		<div>
		filter shown with <input
			value={keyword}
			onChange={handleFilter} />
		</div>
	)
}

export default Filter