var dalNoSQL = require('./DAL/no-sql.js')

var person = {
    "_id": "person_stevean@duke.edu",
    "_rev": "1-8d136b50c18a97c42d23d59fbd08fa25",
    "type": "person",
    "firstName": "Stephen A",
    "lastName": "Ananis",
    "phone": "843 555-1515",
    "email": "stevean@duke.edu",
    "active": true
}

var updatePersonCallback = function(err, res) {
    if (err) {
        return console.log(err.message)
    }
        return console.log('Updated entry', res)
}

console.log(dalNoSQL.updatePerson(person, updatePersonCallback))
