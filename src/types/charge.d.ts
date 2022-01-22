export type Charge = {
    id: string,
    name?: string
    value: number
    formattedValue: string
    paid: boolean
    fix: boolean
    date: {
        day: string | undefined
        time: string | undefined
    }
}