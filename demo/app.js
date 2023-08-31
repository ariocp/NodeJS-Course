fs = require('fs')

const data = fs.readFileSync('./demo/data.txt')
console.group(data.toString())