import { Dispatch } from 'redux'
import { ActionType } from '@state/ui/types'

export const openSidebar = () => {
  return (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.OPEN_SIDEBAR,
    })
  }
}

export const closeSidebar = () => {
  return (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.CLOSE_SIDEBAR,
    })
  }
}

export const toogleSidebar = (isOpen: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.TOGGLE_SIDEBAR,
        payload: !isOpen
    })
  }
}