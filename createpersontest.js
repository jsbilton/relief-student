var dalNoSQL = require('./DAL/no-sql.js')

var person = {
    type: 'person',
    firstName: 'Steve',
    lastName: 'Ananis',
    phone: '843 555-1515',
    email: 'stevean@duke.edu'
}

var createPersonCB = function(err, createPersonInCouch) {
    if (err) 
        return console.log(err.message)
    return console.log(createPersonInCouch)
}

console.log(dalNoSQL.createPerson(person, createPersonCB))
