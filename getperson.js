var dalNoSQL = require('./DAL/no-sql.js')

var getPersonCallback = function(err, getPersonInCouch) {
    if (err) {
        return console.log(err.message)
    }
    return console.log(getPersonInCouch)
}

console.log(dalNoSQL.getPerson(person, getPersonCallback))
