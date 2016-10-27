var dalNoSQL = require('./DAL/no-sql.js')


const personDataJimmy = {
    firstName: "Jimmy",
    lastName: "Martin",
    phone: "404 394-2479",
    email: "JimmyMartinJr@gmail.com",
    type: "person",
    active: true
}

const personDataTom = {
    firstName: "Tom",
    lastName: "Jefferson",
    phone: "843 444-4444",
    email: "TJ@dentalone.com",
    type: "person",
    active: true
}

const personDataWyatt = {
    firstName: "Wyatt",
    lastName: "Johnston",
    phone: "843 222-1212",
    email: "WyattJ1111@gmail.com",
    type: "person",
    active: true
}

const personDataGary = {
    firstName: "Gary",
    lastName: "Johnson",
    phone: "843 555-9876",
    email: "gary.johnson1971@gmail.com",
    type: "person",
    active: true
}

const personDataJudy = {
    firstName: "Judy",
    lastName: "Jones",
    phone: "843 555-5555",
    email: "judy5555@aol.com",
    type: "person",
    active: true
}

const personDataLibby = {
    firstName: "Libby",
    lastName: "Satterfield",
    phone: "843 888-8438",
    email: "lsat1972@gmail.com",
    type: "person",
    active: true
}

const personDataSteve = {
    firstName: "Steve",
    lastName: "Ananias",
    phone: "843 555-1515",
    email: "stevean@duke.edu",
    type: "person",
    active: true
}

var createPersonCB = function(err, createPersonInCouch) {
    if (err) {
        return console.log(err.message)
    }
    return console.log(createPersonInCouch)
}

console.log(dalNoSQL.createPerson(personDataSteve, createPersonCB))
console.log(dalNoSQL.createPerson(personDataLibby, createPersonCB))
console.log(dalNoSQL.createPerson(personDataJudy, createPersonCB))
console.log(dalNoSQL.createPerson(personDataGary, createPersonCB))
console.log(dalNoSQL.createPerson(personDataWyatt, createPersonCB))
console.log(dalNoSQL.createPerson(personDataTom, createPersonCB))
console.log(dalNoSQL.createPerson(personDataJimmy, createPersonCB))
