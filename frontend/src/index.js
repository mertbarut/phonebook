import ReactDOM from 'react-dom'
import AppBlogs from './App'

import { createStore } from 'redux'

import Counter from './components/Counter'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const renderBlogs = () => {
  ReactDOM.render(<AppBlogs />, document.getElementById('root'))
}

const renderCounter = () => {
  ReactDOM.render(<Counter store={store}/>, document.getElementById('root'))
}

//renderBlogs()
renderCounter()

store.subscribe(renderCounter)