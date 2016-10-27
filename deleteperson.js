var dalNoSQL = require('./DAL/no-sql.js')

var person = {
    "_id": "person_lsat1972@gmail.com",
    "_rev": "1-8be7a7ff1717b339bf890ea286ecb700"
}

var deletePersonCB = function(err, res) {
    if (err) {
        return console.log(err.message)
    }
        return console.log('Deleted Person', res)
}
console.log(dalNoSQL.deletePerson(person, deletePersonCB))
