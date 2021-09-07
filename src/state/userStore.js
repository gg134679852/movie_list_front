import { createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const userStore = createStore(reducers, {}, composeWithDevTools())

export default userStore
