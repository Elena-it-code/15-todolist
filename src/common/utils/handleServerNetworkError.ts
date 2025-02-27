import { setAppErrorAC, setAppStatusAC } from "../../app/app-reducer"
import { AppDispatch } from "../../app/store"

// для обработки network ошибок
export const handleServerNetworkError = (dispatch: AppDispatch, err: { message: string }) => {
  dispatch(setAppErrorAC(err.message))
  dispatch(setAppStatusAC("failed"))
}
