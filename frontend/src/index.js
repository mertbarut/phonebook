import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/* React Component Imports */

import AppBlogs from './App'
import ReviewCounter from './components/ReviewCounter'
import NoteApp from './components/NoteApp'
import AnectodesApp from './components/AnectodeApp'

/* Reducer Imports */

import reviewReducer from './reducers/reviewCounter'
import noteReducer from './reducers/noteReducer'
import anectodeReducer from './reducers/anectodeReducer'

/* Blog * Phonebook App */

const renderBlogs = () => {
  ReactDOM.render(<AppBlogs />, document.getElementById('root'))
}

renderBlogs()

/* Review Counter App */

const reviewCounterStore = createStore(reviewReducer)

const renderReviewCounter = () => {
  ReactDOM.render(<ReviewCounter store={reviewCounterStore}/>, document.getElementById('root'))
}

//renderReviewCounter()

//reviewCounterStore.subscribe(renderReviewCounter)

/* Note App */

const noteStore = createStore(noteReducer)

noteStore.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

noteStore.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const renderNotes = () => {
  ReactDOM.render(
    <Provider store={noteStore}>
      <NoteApp />
    </Provider>,
    document.getElementById('root')
  )
}

//renderNotes()

/* Anectode App */

const anecdoteStore = createStore(anectodeReducer)

const renderAnectodes = () => {
  ReactDOM.render(
    <Provider store={anecdoteStore}>
      <AnectodesApp />
    </Provider>,
    document.getElementById('root')
  )
}

//renderAnectodes()

