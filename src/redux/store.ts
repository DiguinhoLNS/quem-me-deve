import { configureStore } from '@reduxjs/toolkit'

import appAuthReducer from './reducers/app/appAuthReducer'

const store = configureStore({
    reducer: {
        appAuth: appAuthReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store