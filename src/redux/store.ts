import { configureStore } from '@reduxjs/toolkit'

import appAuthReducer from './reducers/app/appAuthReducer'
import appThemeReducer from './reducers/app/appThemeReducer'
import chargesReducer from './reducers/charges/chargesReducer'
import debtorsReducer from './reducers/debtors/debtorsReducer'

const store = configureStore({
    reducer: {
        appAuth: appAuthReducer,
        appTheme: appThemeReducer,
        charges: chargesReducer,
        debtors: debtorsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store