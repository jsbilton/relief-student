const dalNoSQL = require('./DAL/no-sql.js')

var ddoc = {
  _id: '_design/email',
  views: {
    email: {
      map: function (doc) {
        if (doc.type == 'person') {
          emit(doc.email+doc._id)
        }
      }.toString()
    }
  }
}

dalNoSQL.createView(ddoc, function (err, res) {
  if(err) console.log('DESIGN DOC ERROR', err)
  if(res) console.log('DESIGN DOC SUCCESS', res)
})
