const fs = require('fs')

console.log('Init')

setTimeout(() => {
    console.log(performance.now(), 'Timer 0')
}, 100)

setImmediate(() => {
    console.log('Immediate')
})

fs.readFile('./demo/data.txt', () => {
    console.log('File readed')
})

setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {

    }
    console.log('Done')
    Promise.resolve().then(() => {
        console.log('Promise inside timeout')
    })
    process.nextTick(() => {
        console.log('NextTick inside timeout')
    })
}, 0)

Promise.resolve().then(() => {
    console.log('Promise')
})

process.nextTick(() => {
    console.log('NextTick')
})

console.log('Final')