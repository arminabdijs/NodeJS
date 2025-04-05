const os = require('os');

// With the OS method, we can access all system information.
console.log(os)


// Get the total memory in bytes
console.log(os.totalmem())


// Get the free memory in bytes
console.log(os.freemem())


// Get the CPU information
console.log(os.cpus())


// Get the hostname of the system
console.log(os.hostname())


// Get the operating system type and version
console.log(os.type(), os.release())

// Get the system uptime in seconds
console.log(os.uptime())
