const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  data: {
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    text: {type: Boolean},
    startDate: {type: String},
    endDate: {type: String},
    message: {type: String},
    images: {type: String }
  }
});

const Contact = mongoose.model('Contact', contactSchema, 'userContact');

module.exports = Contact;

