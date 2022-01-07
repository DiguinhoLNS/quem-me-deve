import { configureStore } from '@reduxjs/toolkit'

import appAuthReducer from './reducers/app/appAuthReducer'
import chargesReducer from './reducers/charges/chargesReducer'

const store = configureStore({
    reducer: {
        appAuth: appAuthReducer,
        charges: chargesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store