const mongoose=require('mongoose')
const Schema=mongoose.Schema



const ticketSchema=new Schema({
    code:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    customer:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Customer'
    },
    employee:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Employee'
    }],
    department:{
        type:Schema.Types.ObjectId,
        required : true,
        ref: 'Department'
    },
    message:{
        type:String
    },
    isResolved:{
        type:Boolean
    }
})


const Ticket=mongoose.model('Ticket', ticketSchema)

module.exports=Ticket