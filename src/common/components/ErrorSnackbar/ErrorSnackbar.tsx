import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { SyntheticEvent } from "react"
import { selectError } from "../../../app/appSelectors"
import { useAppDispatch, useAppSelector } from "common/hooks"
import { setAppErrorAC } from "../../../app/app-reducer"

export const ErrorSnackbar = () => {
  const error = useAppSelector(selectError)

  const dispatch = useAppDispatch()

  const handleClose = (_?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(setAppErrorAC(null))
  }

  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  )
}
