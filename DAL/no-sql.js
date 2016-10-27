
const path = require('path')
const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const fetchConfig = require('zero-config')

var config = fetchConfig(path.join(__dirname, '..'), {dcValue: 'test'})
const urlFormat = require('url').format
const db = new PouchDB(urlFormat(config.get("couch")))

function getDBInfo() {
    return "Success!"
}

////////////////////// ////////////////////// ////////////////////// //////
//////////////////////     CREATE PERSON    ///////////////////////////////
////////////////////// ////////////////////// ////////////////////// //////

function createPerson(data, callback) {
    if (data.hasOwnProperty('lastName') !== true) {
        return callback(new Error('400Missing lastName property within data'));
    }
    if (data.hasOwnProperty('firstName') !== true) {
        return callback(new Error('400Missing firstName property within data'));
    }
    if (data.hasOwnProperty('email') !== true) {
        return callback(new Error('400Missing email property within data'));
    }
    if (data.hasOwnProperty('_id') === true) {
        return callback(new Error('400The id property is not allowed on create'));
    }
    if (data.hasOwnProperty('_rev') === true) {
        return callback(new Error('400The rev property is not allowed on create'));
    }
    data._id = "person_" + data.email
    data.type = "person"
    data.active = true

    //call couch and add the person represented by the data param
    db.put(data, function(err, response) {
        if (err) {
            console.log("ERROR!!!!!!", err)
            return callback(err)
        }
        console.log("GREAT SUCCESS!!!!", response)
        return callback(null, response)
    });
}
////////////////////// ////////////////////// ////////////////////// //////
//////////////////////     CREATE RELIEF    ///////////////////////////////
////////////////////// ////////////////////// ////////////////////// //////

function createReliefEffort(data, callback) {
    if (data.hasOwnProperty('phase') !== true) {
        return callback(new Error('400Missing phase property within data'))
    }
    if (data.hasOwnProperty('name') !== true) {
        return callback(new Error('400Missing name property within data'))
    }
    if (data.hasOwnProperty('organizationID') !== true) {
        return callback(new Error('400Missing organizationID property within data'))
    }
    if (data.hasOwnProperty('_id') === true) {
        return callback(new Error('400Unnecessary id generated automatically'))
    }
    if (data.hasOwnProperty('_rev') === true) {
        return callback(new Error('400Missing revision value property within data'))
    }

    // data._id = 'relief' + data.organizationID + data.name
    data._id = 'relief_' + data.organizationID.replace(/ /g, "_").replace(/\./g, "") + '_' + data.name.replace(/ /g, "_")
    data.type = 'relief'
    data.active = true

    // callback
    db.put(data, function(err, response) {
        if (err)
            return callback(err)
        if (response)
            return callback(null, response)
    })
}

// helper function dont include in dal bc private function


// one generic delete document to delete anything in


////////////////////// ////////////////////// //////////////////////
//////////////////////     DELETE     ///////////////////////////////
////////////////////// ////////////////////// //////////////////////

function deleteDoc(data, callback) {
    if (data.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id value property from data'))
    }
    if (data.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev value property from data'))
    }

    db.remove(data, function(err, response) {
        if (err) {
            return callback(err)
        }
        return callback(null, response)
    })
}
// delete doc calling function
function deletePerson(data, callback) {
    deleteDoc(data, callback)
}

function deleteReliefEffort(data, callback) {
    deleteDoc(data, callback)
}

////////////////////// ////////////////////// //////////////////////
//////////////////////    UPDATE    ///////////////////////////////
////////////////////// ////////////////////// //////////////////////

function updateDoc(data, cb) {
    if (data.hasOwnProperty('_id') !== true) {
        return cb(new Error('400Missing _id value property from data'))
    }
    if (data.hasOwnProperty('_rev') !== true) {
        return cb(new Error('400Missing _rev value property from data'))
    }
    db.put(data, function (err, response) {
      if (err) {
          return cb(err)
      }
      return cb(null, response)
    })
}

function updatePerson(data, cb) {
    updateDoc(data, cb)
}
function updateReliefEffort(data, cb) {
    updateDoc(data, cb)
}

////////////////////// ////////////////////// //////////////////////
//////////////////////     GET     ///////////////////////////////
////////////////////// ////////////////////// //////////////////////

function getDocById(docId, cb) {
  if (docId ==  docId.length || typeof docId == 'string') {
    return cb(new Error('400Missing docId value property from data'))
  }
  db.get(docId,  function (err, response) {
    if (err) {
        return cb(err)
    }
    return cb(null, response)
  })
}

function getPerson(docId, cb) {
  getDocById(docId, cb)
}

function getReliefEffort(docId, cb) {
  getDocById(docId, cb)
}

////////////////////// ////////////////////// //////////////////////
//////////////////////     CREATE VIEW     /////////////////////////
////////////////////// ////////////////////// //////////////////////

function createView(view, cb) {
  db.put(view, function (err, res) {
    if(err) return cb(err)
      return cb(null, res)
  })
}


var dal = {
    getDBInfo: getDBInfo,
    createPerson: createPerson,
    createReliefEffort: createReliefEffort,
    deletePerson: deletePerson,
    deleteReliefEffort: deleteReliefEffort,
    updatePerson: updatePerson,
    updateReliefEffort: updateReliefEffort,
    getPerson: getPerson,
    getReliefEffort: getReliefEffort,
    createView: createView
}

module.exports = dal
