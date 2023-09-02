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


// Hidden classes
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

var p1 = new Point(11, 22)
// hidden clas Point created
var p2 = new Point(33, 44)

p1.z = 55 // another hidden class Point created