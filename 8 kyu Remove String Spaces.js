function noSpace(x) {
    let newStr = ''
    for (let i = 0; i < x.length; i++) {
        if(x[i] !== " ") { newStr += x[i] }
    }
    return newStr
}

let noSpace2 = (x) => x.split(' ').join('')

//Simple, remove the spaces from the string, then return the resultant string.