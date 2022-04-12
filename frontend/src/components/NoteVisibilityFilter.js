import { noteFilterChange } from "../reducers/noteFilterReducer";
import { useDispatch } from "react-redux";

const NoteVisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      all    
      <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(noteFilterChange('ALL'))}
      />
      important   
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(noteFilterChange('IMPORTANT'))}
      />
      nonimportant 
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(noteFilterChange('NONIMPORTANT'))}
      />
    </div>
  )
}

export default NoteVisibilityFilter