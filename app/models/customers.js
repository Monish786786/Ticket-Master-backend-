const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')

const customerSchema=new Schema({
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
                return { notice: 'invalid email given' }
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isMobilePhone(value)
            },
            message:function(){
                return { notice:'invalid mobile number given' }
            }
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    department:{

        type:Schema.Types.ObjectId,
        required:true
    }
})




const Customer=mongoose.model('Customer', customerSchema)



module.exports=Customer
