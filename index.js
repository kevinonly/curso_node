//const {Person} = require("./person")
require("dotenv").config();

const connectToMongo = require('./src/database/connect')

connectToMongo()
