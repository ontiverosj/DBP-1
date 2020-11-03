const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'local'; 

const client = new MongoClient(url, {useUnifiedTopology: true})

const UserSchema = new Mongoschema({

    name: {
    type : String,
    required: true 
    },
    email: {
    type : String,
    required: true 
        },
    password: {
    type : String,
    required: true 
        },
    date: {
    type : String,
    default: date.now 
         },
});
 const User = mongo.model('User, UserSchema');
module.exports = User;