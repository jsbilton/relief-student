const dalNoSQL = require('./DAL/no-sql.js')

var viewReliefEfforts = {
  _id: '_design/reliefefforts',
  views: {
    reliefefforts: {
      map: function (doc) {
        if (doc.type == 'relief') {
          emit(doc.name+doc._id)
        }
      }.toString()
    }
  }
}

dalNoSQL.createView(viewReliefEfforts, function (err, res) {
  if(err) console.log('DESIGN DOC RELIEF EFFORT LAST NAME ERROR', err)
  if(res) console.log('DESIGN DOC RELIEF EFFORT LAST NAME SUCCESS', res)
})
