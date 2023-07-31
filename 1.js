// OS module: Built in modules
const os = require('os');

// User uptime
const user = os.userInfo();

console.log(user);

// Uptime
console.log(`The system in running for ${os.uptime()} seconds `);

const mystff = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freshmem:os.freemem(),
}

console.log(mystff);