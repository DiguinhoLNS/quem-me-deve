import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Theme } from "../../../types/theme"

import themes from "../../../styles/themes"

interface State {
    theme: Theme
}

const initialState: State = {
    theme: themes.blue
}

const appThemeSlice = createSlice({
    name: 'appTheme',
    initialState,
    reducers: {
        setAppTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        }
    }
})

export const { setAppTheme } = appThemeSlice.actions
export default appThemeSlice.reducer