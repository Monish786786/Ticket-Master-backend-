const mongoose=require('mongoose')


//mongoose connection configure
const setupDB=()=>{ mongoose.connect('mongodb://localhost:27017/oct-ticket-master', { useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error',err)

})
}

module.exports=setupDB