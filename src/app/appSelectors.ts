import { RootState } from "./store"

export const selectThemeMode = (state: RootState) => state.app.themeMode
export const selectStatus = (state: RootState) => state.app.status
