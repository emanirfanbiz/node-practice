const os = require('os')
//we can have specific one by {} instead of os
//lets get info about current user

const user = os.userInfo()
console.log(user)

//methos returns the system uptime in seconds
console.log(`the system uptime is : ${os.uptime()} seconds`)

const currentDS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
     freemem : os.freemem()
}
console.log(currentDS)