import { AppDispatch } from "../../app/store"
import { setAppErrorAC, setAppStatusAC } from "../../app/app-reducer"
import { BaseResponse } from "common/types"

// для обработки resultCode ошибок

//  BaseResponse<{ item: DomainTask }>
//  BaseResponse<{ item: Todolist }>
export const handleServerAppError = <T>(dispatch: AppDispatch, data: BaseResponse<T>) => {
  dispatch(setAppStatusAC("failed"))
  dispatch(setAppErrorAC(data.messages.length ? data.messages[0] : "Some error occurred."))
}


// синтаксис для FD
// function handleServerAppError2<T>(dispatch: AppDispatch, data: BaseResponse<T>) {
//   dispatch(setAppStatusAC("failed"))
//   dispatch(setAppErrorAC(data.messages.length ? data.messages[0] : "Some error occurred."))
// }
