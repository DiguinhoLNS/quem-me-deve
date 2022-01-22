import { Charge } from "../../types/charge"

export default function fixedCharges(charges: Charge[]) {

    try {
        return charges.filter(data => !data.paid && data.fix)
    } catch (error) {
        console.log(error)
        return []
    }

}