const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace(
  '<password>',
  DATABASE_PASSWORD
)

mongoose.connect(DB)
  .then(() => console.log("連線資料成功"));