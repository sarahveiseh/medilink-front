import { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'

export const UiContext = createContext(undefined)

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)
  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  )
}
