import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    filterAll: boolean,
    filterPaid: boolean,
    filterUnpaid: boolean,
}

const initialState: State = {
    filterAll: true,
    filterPaid: false,
    filterUnpaid: false,
}

const debtorsSlice = createSlice({
    name: 'debtors',
    initialState,
    reducers: {
        setDebtorFilterAll: (state) => {
            state.filterAll = true
            state.filterPaid = false
            state.filterUnpaid = false
        },
        setDebtorFilterPaid: (state) => {
            state.filterAll = false
            state.filterPaid = true
            state.filterUnpaid = false
        },
        setDebtorFilterUnpaid: (state) => {
            state.filterAll = false
            state.filterPaid = false
            state.filterUnpaid = true
        },
    }
})

export const { setDebtorFilterAll, setDebtorFilterPaid, setDebtorFilterUnpaid } = debtorsSlice.actions
export default debtorsSlice.reducer