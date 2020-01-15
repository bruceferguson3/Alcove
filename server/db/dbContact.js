const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://<username>:<password>@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: 'alcoveDB'
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB: ', err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  text: Boolean,
  startDate: String,
  endDate: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema, 'userContact');

async function createContact() {
  const contact = new Contact({
    name: 'Ben Shaw',
    email: 'bshaw14@gmail.com',
    phone: '(555) 987-6543',
    text: true,
    startDate: '2020-02-12',
    endDate: '2020-03-25',
    message: "Flatland! Hypatia. Galaxies Orion's sword globular star cluster? Light years quasar as a patch of light gathered by gravity Vangelis radio telescope. Stirred by starlight vanquish the impossible Tunguska event cosmic fugue courage of our questions worldlets galaxies birth colonies. Vastness is bearable only through love."
  });

  const result = await contact.save();

  console.log(result);
};

createContact();
