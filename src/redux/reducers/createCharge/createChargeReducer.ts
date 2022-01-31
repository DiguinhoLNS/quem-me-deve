import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    filteredContacts: string[]
}

const initialState: State = {
    filteredContacts: []
}

const createChargeSlice = createSlice({
    name: 'createCharge',
    initialState,
    reducers: {
        setFilteredContacts: (state, action: PayloadAction<string[]>) => {
            state.filteredContacts = action.payload
        }
    }
})

export const { setFilteredContacts } = createChargeSlice.actions
export default createChargeSlice.reducer