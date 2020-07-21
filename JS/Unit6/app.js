// const weather = require('./weather');

// const query = process.argv.slice(2).join("_").replace(' ','_')
// weather.get (33.441792, -94.037689)

// const users = process.argv.slice(2);
// users.forEach(weather.get (33.441792, -94.037689));


const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        
        console.log(hash);
        
        // Store hash in your password DB.
    });
});

