const dalNoSQL = require('./DAL/no-sql.js')

var viewLastName = {
  _id: '_design/lastname',
  views: {
    lastname: {
      map: function (doc) {
        if (doc.type == 'person') {
          emit(doc.lastName+doc._id)
        }
      }.toString()
    }
  }
}

dalNoSQL.createView(viewLastName, function (err, res) {
  if(err) console.log('DESIGN DOC PERSON LAST NAME ERROR', err)
  if(res) console.log('DESIGN DOC PERSON LAST NAME SUCCESS', res)
})
