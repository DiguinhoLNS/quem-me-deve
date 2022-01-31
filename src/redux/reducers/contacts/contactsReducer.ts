import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    contacts: string[]
}

const initialState: State = {
    contacts: []
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<string[]>) => {
            state.contacts = action.payload
        }
    }
})

export const { setContacts } = contactsSlice.actions
export default contactsSlice.reducer