export type Charge = {
    id: string,
    name?: string
    value: number
    formattedValue: string
    date: {
        day: string | undefined
        time: string | undefined
    }
}