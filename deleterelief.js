var dalNoSQL = require('./DAL/no-sql.js')

var relief = {
    "_id": "reliefSt. PhillipsHaiti 2015",
    "_rev": "1-7e699a0046a77dddac9fb202e1381786"
}

var deleteReliefCB = function(err, results) {
    if (err) {
        return console.log(err.message)
    }
    return console.log('Deleted Person', results)
}

console.log(dalNoSQL.deleteReliefEffort(relief, deleteReliefCB))
