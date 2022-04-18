import { ActionType, initialStateType } from './types'

const initialState: initialStateType = {
  isSidebarOpen: false
}

export const uiReducer = (state: initialStateType = initialState, { type, payload }: any) => {
  switch(type) {
    case ActionType.OPEN_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: true
      }
    }

    case ActionType.CLOSE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: false
      }
    }

    case ActionType.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: payload
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}