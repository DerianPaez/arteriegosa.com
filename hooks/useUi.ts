import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from "react-redux";

// State
import { RootState } from '@state/store'
import { uiActions } from '@state/ui';


const useUi = () => {
  const dispatch = useDispatch()
  const {
    isSidebarOpen
  } = useSelector((state: RootState) => state.ui)

  const { openSidebar, closeSidebar, toogleSidebar } = bindActionCreators(uiActions ,dispatch)

  return {
    isSidebarOpen,

    openSidebar,
    closeSidebar,
    toogleSidebar
  }
}

export default useUi