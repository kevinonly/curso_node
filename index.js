//const {Person} = require("./person")
require("dotenv").config();

const connectToMongo = require('./src/database/connect')


connectToMongo()

//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')
//require('./modules/express')
//const person = new Person('Felipe')

