require('dotenv').config();

const nodemailer=require('nodemailer')

//Step 1
const mail=()=>{
let transporter=nodemailer.createTransporter({
  service:'gmail',
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
  }
});


//Step 2
let mailOption={
  from:'rk7022756@gmail.com',
  to:'hashmimonish5@gmail.com',
  subject:'Confirmation about the mail.',
  text:'Your ticket has been resolved.There is no more problem in your ticket.'
};



//Step 3
transporter.sendMail(mailOption, function(err,data){
  if(err){
    console.log('err occurs')
  }else{
    console.log('Email sent')
  }
});

}