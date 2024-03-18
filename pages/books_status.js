let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  BookInstance.find()
    .populate('book')
    .exec().then(list => {
      res.send(list.map(bi => {
        return bi.book.title + " : " + bi.status;
      }))
    })
    .catch(err => res.send('Status not found'));
}