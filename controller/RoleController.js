const Role = require('../model/RoleSchema');

const createRole=async function (req,resp) 
{
    const {role,discription}=req.body;
    try{
        const newRole=new Role({
            role:role,
            discription:discription
        });
        const saveData=await newRole.save();
        resp.status(201).json({message:"Role Created Successfully",data:saveData});
        

    }

    catch(e){
        resp.status(500).json({message:"Internal Server Error",error:e.message});
    }
    

 
  };
  module.exports = {
    createRole

}