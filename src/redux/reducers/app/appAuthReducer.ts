import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    userData: any | null

    isLogged: boolean
    loading: boolean
}

const initialState: State = {
    userData: null,

    isLogged: false,
    loading: true,
}

const appAuthSlice = createSlice({
    name: "appAuth",
    initialState,
    reducers: {
        setAppUserData: (state, action: PayloadAction<any>) => {
            state.userData = action.payload
        },

        setAppLogin: (state, action: PayloadAction<any>) => {
            state.userData = action.payload
            state.isLogged = true
            state.loading = false
        },
        setAppLogout: (state) => {
            state.userData = null
            state.isLogged = false
            state.loading = false
        },
        setAppLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    }
})

export const { setAppUserData, setAppLogin, setAppLogout, setAppLoading } = appAuthSlice.actions
export default appAuthSlice.reducer