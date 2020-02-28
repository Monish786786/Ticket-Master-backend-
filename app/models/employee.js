const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')


const employeeSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return {notice:'email given is not valid'}
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        min:10,
        max:10,
        validate:{
            validator:function(value){
                return isInt(value)
            },
            message:function(){
                return {
                    notice:'invalide mobile number given'
                }
            }

        }
    },
    department : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Department'
        
    }
    
})


const Employee=mongoose.model('Employee', employeeSchema)

module.exports=Employee