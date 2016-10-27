var dalNoSQL = require('./DAL/no-sql.js')

var relief = {
    "_id": "relief_St_Phillips_Haiti_2015",
    "_rev": "1-7e699a0046a77dddac9fb202e1381786",
    "type": "relief",
    "phase": "completed",
    "name": "Haiti 2015",
    "organizationID": "St. Phillips",
    "desc": "Build school desks and blackboards at the St. Esprit (Holy Spirit) church and school in the remote village of Gros Mangle in the island of La Gonave, Haiti. Home base is located in the main town of Anse - à - Galets at the St.François d’ Assise church and school.",
    "start": "2015-09-25",
    "end": "2015-10-01"
}

var updateReliefCallback = function(err, res) {
    if (err) {
        return console.log(err.message)
        return console.log("Updated Relief Effort", res)
    }
}

console.log(dalNoSQL.updateReliefEffort(relief, updateReliefCallback))
