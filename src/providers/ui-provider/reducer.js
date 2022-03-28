import { uiTypes } from './types'
import { initialState } from './state'

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case uiTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: { ...state.drawer, open: !state.drawer.open },
      }
    case uiTypes.TOGGLE_DIALOG:
      return {
        ...state,
        dialog: { ...state.dialog, ...payload },
      }
    case uiTypes.TOGGLE_TOAST:
      return {
        ...state,
        toast: { ...state.toast, ...payload },
      }
    case uiTypes.TOGGLE_DARK:
      return {
        ...state,
        dark: payload,
      }
    default:
      return state
  }
}
