const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)
// const DB = "mongodb://localhost:27017/hotel"
mongoose.connect(DB)
  .then(() => console.log("連線資料成功"));