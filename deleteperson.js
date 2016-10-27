var dalNoSQL = require('./DAL/no-sql.js')

var person = {
    "_id": "person_buddyFive@jrscode.edu",
    "_rev": "1-a0c88363a39dc610000b02b93af34a5e"
}

var deletePersonCB = function(err, res) {
    if (err) {
        return console.log(err.message)
        return console.log('Deleted Person', res)
    }
}
console.log(dalNoSQL.deletePerson(person, deletePersonCB))
