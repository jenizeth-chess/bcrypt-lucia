'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require("bcrypt");
//START_ASYNC -do not remove notes, place code between correct pair of notes.
//13. Hash and Compare Passwords Asynchronously
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res); //true
    });
  });


//END_ASYNC

//START_SYNC
//14. Hash and Compare Passwords Synchronously
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(hash);
console.log(result); 

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("app luci ♟️ Listening on port:", PORT)
});
