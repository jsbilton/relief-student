/*jshint esversion: 6 */
////////////////////
//     NO SQL
////////////////////

// To run program.js from terminal, ensure you are in the correct directory
//  and run the following command:
// $ NODE_ENV=production node addPerson.js

const dalNoSQL = require('./DAL/no-sql.js');

// person data. Use to test the createPerson() function within your DAL,
// Make INDIVIDUAL calls to the createPerson() function within your DAL
// with each person within the array.
const personDataJimmy = {
    firstName: "Jimmy",
    lastName: "Martin",
    phone: "404 394-2479",
    email: "JimmyMartinJr@gmail.com",
    type: "person",
    active: true
};

const personDataTom = {
    firstName: "Tom",
    lastName: "Jefferson",
    phone: "843 444-4444",
    email: "TJ@dentalone.com",
    type: "person",
    active: true
};

const personDataWyatt = {
    firstName: "Wyatt",
    lastName: "Johnston",
    phone: "843 222-1212",
    email: "WyattJ1111@gmail.com",
    type: "person",
    active: true
};

const personDataGary = {
    firstName: "Gary",
    lastName: "Johnson",
    phone: "843 555-9876",
    email: "gary.johnson1971@gmail.com",
    type: "person",
    active: true
};

const personDataJudy = {
    firstName: "Judy",
    lastName: "Jones",
    phone: "843 555-5555",
    email: "judy5555@aol.com",
    type: "person",
    active: true
};

const personDataLibby = {
    firstName: "Libby",
    lastName: "Satterfield",
    phone: "843 888-8438",
    email: "lsat1972@gmail.com",
    type: "person",
    active: true
};

const personDataSteve = {
    firstName: "Steve",
    lastName: "Ananias",
    phone: "843 555-1515",
    email: "stevean@duke.edu",
    type: "person",
    active: true
};

const personDataJared = {
  firstName: "Jared",
  lastName: "Bilton",
  phone: "843 555-3456",
  email: "jared@usc.edu",
  type: "person",
  active: true
}

const personDataFelix = {
  firstName: "Felix",
  lastName: "Bilton",
  phone: "844 595-3406",
  email: "felix@unc.edu",
  type: "person",
  active: true
}

const personDataFritz = {
  firstName: "Fritz",
  lastName: "Felonis",
  phone: "976 989-0987",
  email: "fritz@odb.edu",
  type: "person",
  active: true
}
