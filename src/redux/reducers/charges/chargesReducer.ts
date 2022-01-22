import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Charge } from "../../../types/charge"

interface State {
    charges: Charge[] | []
    newCharge: Charge
    loadingCharges: boolean
}

const initialState: State = {
    charges: [],
    newCharge: {
        id: '',
        name: undefined,
        value: 0,
        formattedValue: "0.00",
        paid: false,
        date: {
            day: undefined,
            time: undefined
        }
    },
    loadingCharges: true
}

const chargeSlice = createSlice({
    name: 'charges',
    initialState,
    reducers: {
        setChargesData: (state, action: PayloadAction<Charge[]>) => {
            state.charges = action.payload
            state.loadingCharges = false
        },
        setChargesLoading: (state) => {
            state.loadingCharges = true
        },

        createNewCharge: (state, action: PayloadAction<Charge>) => {
            state.newCharge = action.payload
        },
        resetNewCharge: (state) => {
            state.newCharge = initialState.newCharge
        },
        setNewCharges: (state, action: PayloadAction<{id: string, day: string, time: string}>) => {
            state.newCharge.id = action.payload.id
            state.newCharge.date.day = action.payload.day
            state.newCharge.date.time = action.payload.time
            state.charges = [...state.charges, state.newCharge]
        },

        deleteCharge: (state, action: PayloadAction<string>) => {
            state.charges = state.charges.filter(charge => charge.id !== action.payload)
        },
        checkCharge: (state, action: PayloadAction<string>) => {
            const charge = state.charges.find(charge => charge.id === action.payload)
            charge ? charge.paid = true : false
        }
    }
})

export const { setChargesData, setChargesLoading, createNewCharge, setNewCharges, resetNewCharge, deleteCharge, checkCharge } = chargeSlice.actions
export default chargeSlice.reducer