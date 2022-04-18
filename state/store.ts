import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// Reducers
import { uiReducer } from '@state/ui/reducer'

export const rootReducer = combineReducers({
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>


export const initStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}