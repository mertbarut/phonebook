import ReactDOM, { render } from 'react-dom'
import AppBlogs from './App'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import reviewReducer from './reducers/reviewCounter'
import ReviewCounter from './components/ReviewCounter'

import anectodeReducer from './reducers/anectodeReducer'
import AppAnectodes from './components/Anectodes'

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

renderBlogs()
//renderCounter()
//renderReviewCounter()
//renderAnectodes()

//counterStore.subscribe(renderCounter)
//reviewCounterStore.subscribe(renderReviewCounter)
anecdoteStore.subscribe(renderAnectodes)