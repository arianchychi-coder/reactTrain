const HeadPhoneModel = require("../models/headphone_model")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const jwt = require("jsonwebtoken")
const secretkey = "12345"
const crypto = require("crypto")



const registerSchema = Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    confirmpassword:Joi.string().min(6).required()
})



const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})



const adminSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})



const generateAndSaveToken = async(user)=>{
    const accessToken = jwt.sign({
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
    },secretkey,{expiresIn:"1h"})


    const refreshToken = crypto.randomBytes(32).toString('hex')
    const hashRefreshToken = await bcrypt.hash(refreshToken,10)


    const update = await HeadPhoneModel.updateRefreshToken(user._id.toString(),hashRefreshToken)

    if (!update) {
        throw new Error("Faild to update refreshtoken in data base")
    }

    return {accessToken,refreshToken}

}




const validate = (schema , data) => schema.validate(data)


const getAll = async(req,res)=>{
    try {
        const headphone = await HeadPhoneModel.getAll()
        const head = headphone.map(user=>({
            id:user._id.toString(),
            name:user.name,
            email:user.email,
            password:user.password,
            confirmpassword:user.confirmpassword,
             image:user.image,
             refreshToken:user.refreshToken
        }))
        res.json(head)
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}


const register = async(req,res)=>{


    const {error} = validate(registerSchema, req.body)


    if (error) {
        return res.status(404).json({message: error.details[0].message})
    }



    const {name,email,password,confirmpassword} = req.body


    try {

        if (password !== confirmpassword) {
            return res.status(401).json({message:"Err in compair password"})
        }


        const exitEmail = await HeadPhoneModel.getByEmail(email)

        if (exitEmail) {
            return res.status(409).json({message:"This email was registerd"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        const hashConfirmPassword = await bcrypt.hash(confirmpassword,10)
        const result = await HeadPhoneModel.addInfo(name,email,hashPassword,hashConfirmPassword)

        if (!result) {
            return res.status(400).json({message:"Error in save information"})
        }



        const user = await HeadPhoneModel.getByEmail(email)

        if (!user) {
            return res.status(403).json({message:"Err in email"})
        }


        const tokens  = await generateAndSaveToken(user)


        return res.status(202).json({
            message:"Register",
            tokens,
            id:user._id,
            name:user.name,
            email:user.email
        })
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}




const login = async(req,res)=>{


    const {error} = validate(loginSchema, req.body)


    if (error) {
        return res.status(404).json({message: error.details[0].message})
    }


    const {email,password} = req.body


    try {


        const user = await HeadPhoneModel.getByEmail(email)

        if (!user) {
            return res.status(401).json({message:"Err in email or password"})
        }


        const IsPassword = await bcrypt.compare(password,user.password)

        if (!IsPassword) {
            return res.status(403).json({message:"Err in email or password"})
        }

        const tokens  = await generateAndSaveToken(user)


        return res.status(202).json({
            message:"Login",
            id:user._id.toString(),
            name:user.name,
            email:user.email,
            tokens
        })
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}



const Adminlogin = async(req,res)=>{


    const {error} = validate(adminSchema, req.body)


    if (error) {
        return res.status(404).json({message: error.details[0].message})
    }


    const {email,password} = req.body


    try {


        const user = await HeadPhoneModel.getByEmail(email)

        if (!user) {
            return res.status(401).json({message:"Err in email or password"})
        }


        const IsPassword = await bcrypt.compare(password,user.password)

        if (!IsPassword) {
            return res.status(403).json({message:"Err in email or password"})
        }

        
        if (user.role !== "admin") {
            return res.status(403).json({message:"you havent access to see this page"})
        }

        const tokens  = await generateAndSaveToken(user)


        return res.status(202).json({
            message:"admin login",
            tokens
        })
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}



const updateInfo = async(req,res)=>{
    const {id} = req.params;
    const {name,email,password,confirmpassword} = req.body


    const image = req.files?.image?.[0]?.filename || null


    try {
        let hashPassword

        if (password) {
            hashPassword =await bcrypt.hash(password,10)
        }

        let hashconfirmpassword

        if (confirmpassword) {
            hashconfirmpassword =await bcrypt.hash(confirmpassword,10)
        }


        const result = await HeadPhoneModel.updateInfo(id,name,email,hashPassword,hashconfirmpassword,image) 

        if (!result) {
            return res.status(400).json({message:"User not find"})
        }

        return res.status(200).json({message:"Update succesfull"})
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}


const deletInfo = async(req,res)=>{
    const {id} = req.params;

    try {

        const result = await HeadPhoneModel.deleteInfo(id) 

        if (!result) {
            return res.status(400).json({message:"User not find"})
        }

        return res.status(200).json({message:"Delete succesfull"})
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({message:"Err in server"})
    }
}

module.exports = {
    getAll,register,login,updateInfo,deletInfo,Adminlogin
}