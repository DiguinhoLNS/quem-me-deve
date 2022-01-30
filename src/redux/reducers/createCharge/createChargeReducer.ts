import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    contacts: string[]
    filteredContacts: string[]
}

const initialState: State = {
    contacts: [],
    filteredContacts: []
}

const createChargeSlice = createSlice({
    name: 'createCharge',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<string[]>) => {
            state.contacts = action.payload
        },
        setFilteredContacts: (state, action: PayloadAction<string[]>) => {
            state.filteredContacts = action.payload
        }
    }
})

export const { setContacts, setFilteredContacts } = createChargeSlice.actions
export default createChargeSlice.reducer