const HeadPhoneModel = require("../models/headphone_model")


const getAdmin = async(req,res)=>{
    try {
        const admins = await HeadPhoneModel.getAll()
        const user = admins.map(admin=>({
            id:admin._id.toString(),
            name:admin.name,
            email:admin.email,
            role:admin.role,
            refreshToken:admin.refreshToken
        }))

        res.json(user)
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}



const postAdmin = async(req,res)=>{
    try {
        const {register} = require("./headphone_controller")
        await register(req,res)
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}


const putAdmin = async(req,res)=>{
    
    const {id} = req.params
    const{name,email} = req.body


    try {
        const result = await HeadPhoneModel.updateInfo(id,name,email)

        if (!result) {
            return res.status(400).json({message:"User not find"})
        }

        return res.status(200).json({message:"Update successfull"})
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}



const deleteAdmin = async(req,res)=>{
    const {id}  = req.params
    
    try {
        const deleteAdmin = await HeadPhoneModel.deleteInfo(id)

        if (!deleteAdmin) {
            return res.status(400).json({message:"User not find"})
        }


        return res.status(200).json({
            message:"Delete successfull"
        })
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}

module.exports = {
    getAdmin,postAdmin,putAdmin,deleteAdmin
}