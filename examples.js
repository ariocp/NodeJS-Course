// Stack вызова
const a = 5

function double(a) {
    return a * a
}

function logDouble(a) {
    console.log(double(a))
}

console.log(`Старое заначение ${a}`)
logDouble(a)


const b = 5

setTimeout(() => {
    console.log('Timeout')
}, 1000)

console.log(`Старое заначение ${b}`)