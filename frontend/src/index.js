import React from 'react'
import ReactDOM from 'react-dom'
import AppBlogs from './App'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import reviewReducer from './reducers/reviewCounter'
import ReviewCounter from './components/ReviewCounter'

import anectodeReducer from './reducers/anectodeReducer'
import AppAnectodes from './components/Anectodes'

import App from './NoteApp'

import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

const reviewCounterStore = createStore(reviewReducer)
const anecdoteStore = createStore(anectodeReducer)

const renderBlogs = () => {
  ReactDOM.render(<AppBlogs />, document.getElementById('root'))
}

const renderReviewCounter = () => {
  ReactDOM.render(<ReviewCounter store={reviewCounterStore}/>, document.getElementById('root'))
}

const renderAnectodes = () => {
    ReactDOM.render(
      <Provider store={anecdoteStore}>
        <AppAnectodes />
    </Provider>,
    document.getElementById('root')
  )
}

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const renderNotes = () => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
}

//renderBlogs()
//renderCounter()
//renderReviewCounter()
//renderAnectodes()
renderNotes()

//counterStore.subscribe(renderCounter)
//reviewCounterStore.subscribe(renderReviewCounter)
//anecdoteStore.subscribe(renderAnectodes)