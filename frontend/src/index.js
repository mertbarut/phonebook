import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

/* React Component Imports */

import AppBlogs from './App'
import ReviewCounter from './components/ReviewCounter'
import NoteApp from './components/NoteApp'
import AnectodesApp from './components/AnectodeApp'
import TicTacToe from './components/TicTacToe'
import MoviesApp from './components/MovieList'

/* Reducer Imports */

import reviewReducer from './reducers/reviewCounter'
import noteDisplayReducer, { setNotes }  from './reducers/noteDisplayReducer'
import noteFilterReducer from './reducers/noteFilterReducer'
import anectodeReducer, { setAnecdotes } from './reducers/anectodeReducer'

/* Services */

import noteService from './services/notes'
import anecdoteService from './services/anecdotes'

/* Blog * Phonebook App */

const renderBlogs = () => {
  ReactDOM.render(<AppBlogs />, document.getElementById('root'))
}

//renderBlogs()

/* Review Counter App */

const reviewCounterStore = createStore(reviewReducer)

const renderReviewCounter = () => {
  ReactDOM.render(<ReviewCounter store={reviewCounterStore}/>, document.getElementById('root'))
}

//renderReviewCounter()

//reviewCounterStore.subscribe(renderReviewCounter)

/* Note App */

const noteStore = configureStore({
  reducer: {
    notes: noteDisplayReducer,
    filter: noteFilterReducer 
  }
})

//noteService.getAll().then(notes => noteStore.dispatch(setNotes(notes)))

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

const anecdoteStore = configureStore({
  reducer: {
    anecdotes: anectodeReducer
  }
})

const renderAnectodes = () => {
  ReactDOM.render(
    <Provider store={anecdoteStore}>
      <AnectodesApp />
    </Provider>,
    document.getElementById('root')
  )
}

renderAnectodes()

/* TicTacToe */

const renderTicTacToe = () => {
  ReactDOM.render(
    <TicTacToe />,
    document.getElementById('root')
  )
}

//renderTicTacToe()

/* Movie List App */

const renderMovies = () => {
  ReactDOM.render(
    <MoviesApp />,
    document.getElementById('root')
  )
}

//renderMovies()