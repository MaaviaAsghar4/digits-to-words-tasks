let units = [
    {1: 'one'},
    {2: 'two'},
    {3: 'three'},
    {4: 'four'},
    {5: 'five'},
    {6: 'six'},
    {7: 'seven'},
    {8: 'eight'},
    {9: 'nine'},
    {10: 'ten'},
    {11: 'eleven'},
    {12: 'twelve'},
    {13: 'thirteen'},
    {14: 'fourteen'},
    {15: 'fifteen'},
    {16: 'sixteen'},
    {17: 'seventeen'},
    {18: 'eighteen'},
    {19: 'ninteen'},
]

let tens = [
    {2: 'twenty'},
    {3: 'thirty'},
    {4: 'fourty'},
    {5: 'fifty'},
    {6: 'sixty'},
    {7: 'seventy'},
    {8: 'eighty'},
    {9: 'ninty'},
]

let num = (prompt('Enter Your Number'))
let numSplit = num.split('')
let i = 0;

while(numSplit[i] === '0'){
    numSplit.shift()
    i + 1;
}

if(numSplit.length === 1){
    let myNumber = numSplit[0]
    let match = units[myNumber - 1]
    console.log(Object.values(match).join('')) 
} else if (numSplit.length === 2 && parseInt(num) < 20) {
    let match = units[parseInt(num) - 1]
    console.log(Object.values(match).join('')) 
} else if (numSplit.length ===2 && parseInt(num) >= 20) {
    let tenNum = numSplit[0]
    let unitNum = numSplit[1]
    let matchTen = tens[tenNum - 2]
    let matchUnit = unitNum ? units[unitNum - 1] : ''
    let numTen = Object.values(matchTen).join('')
    let numUnit = matchUnit ? Object.values(matchUnit).join('') : ''
    console.log(`${numTen} ${numUnit}`)
} else if (numSplit.length === 0){
   console.log('zero')
}
