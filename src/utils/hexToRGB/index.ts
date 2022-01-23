export default function hexToRGB(hex: string){
    const check = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return check ? `${parseInt(check[1], 16)}, ${parseInt(check[2], 16)}, ${parseInt(check[3], 16)}` : null
}