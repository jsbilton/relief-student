var dalNoSQL = require('./DAL/no-sql.js')

var getRelifEffortCallback = function(err, getReliefInCouch) {
      if (err) {
          return console.log(err.message)
      }
      return console.log(getReliefInCouch)
  }

}

console.log(dalNoSQL.getPerson(relief, getRelifEffortCallback))
