const mongoose = require('mongoose')
const { Schema , model} = mongoose
const TasksSchema =new Schema({
  name : {
    type : String,
    required : [true,'Need string']
  }, 
  completed : {
    type : Boolean , 
    default : false
  },
})

const Tasks =  model('Tasks',TasksSchema)
module.exports = Tasks