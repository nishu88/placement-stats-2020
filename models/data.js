var mongoose = require('mongoose');

var Schema =mongoose.Schema;

var schema = new Schema({
  id:{type: Number},
  company_name:{type: String},
  cgpa_cutoff:{type: Number},
  ctc:{type: Number},
  base:{type: Number},
  date_of_visit:{type: String},
  total_offers:{type: Number},
  open_dream:{type: String}
});



module.exports = mongoose.model('Data',schema,'placement');
