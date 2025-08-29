const mongoose = require('mongoose')
const connectString='mongodb://localhost:27017/kalviumdb'
mongoose.connect(connectionString,{
  useNewUrlParser:true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("Mongodb is running sucessfully")

})
.catch(err=>{
  console.log(err);
  
})