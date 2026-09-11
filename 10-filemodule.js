const {readFileSync, writeFileSync} = require('fs')
//or simply use const fs = require ('fs)
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync ('./content/result-sync.txt',    `here is the result ${first}, ${second}`, {flag : 'a'})
console.log('Done with the task')
console.log('Starting the next one')