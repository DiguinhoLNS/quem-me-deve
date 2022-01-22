import { Charge } from "../../types/charge"

export default function largestCharge(charges: Charge[]){

    let largestValue = 0

    charges.forEach(data => { if(largestValue < data.value) largestValue = data.value })

    return charges.find(data => data.value === largestValue)!
    
}