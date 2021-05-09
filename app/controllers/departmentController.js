const Department=require('../models/department')


module.exports.list=(req,res)=>{

    
    Department.find()
    .then((departments)=>{
        res.json(departments)
    })
    .catch((err)=>{
        res.json(err)
    })

}


module.exports.create=(req,res)=>{
    
    const body=req.body

    const department=new Department(body)

    department.save()
    .then((department)=>{
        if(department){
            res.json(department)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.update=(req,res)=>{

    const id=req.params.id
    const body=req.body

    Department.findByIdAndUpdate(id, body, {new:true, runValidators:true})
    .then((department)=>{
        if(department){
            res.json(department)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.destroy=(req,res)=>{
    const id=req.params.id

    Department.findByIdAndDelete(id)
    .then((department)=>{
        if(department){
            res.json(department)
        }else{
            res.json(err)
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
     const id=req.params.id

     Employee.findById(id)
     .then((employee)=>{
         if(employee){
             res.json(employee)
         }else{
             res.json({})
         }
     })
     .catch((err)=>{
         res.json(err)
     })
}