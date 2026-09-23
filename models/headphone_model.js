const { ObjectId } = require("mongodb")
const connectMongo = require("../configs/headphone_config")


class HeadPhoneModel {
    getAll = async()=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.find({}).toArray()
            return result
        } catch (error) {
            console.log("Error: ",error)
            return []
        }
    }


    getById = async(id)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne(
                {_id: new ObjectId(id)}
            )
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }


    getByName = async(name)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({name})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }


    getByEmail = async(email)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({email})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }


    getByPassword = async(password)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({password})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }


    getByConfirmPassword = async(confirmpassword)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({confirmpassword})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }




    getByRefreshToken = async(refreshToken)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({refreshToken})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }



    
    getByImage = async(image)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.findOne({image})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }



    addInfo = async(name,email,password,confirmpassword)=>{
         try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.insertOne({name,email,password,confirmpassword,refreshToken:null,CreatAt: new Date(),role:"user"})
            return result
        } catch (error) {
            console.log("Error: ",error)
            return null
        }
    }




    updateRefreshToken = async(userid,refreshToken)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.updateOne(
                {_id: new ObjectId(userid)},
                {$set:{refreshToken:refreshToken}}
            )
            return result.modifiedCount > 0
        } catch (error) {
            console.log("Error: ",error)
            return false
        }
    }




    updateInfo = async(id,name,email,password,confirmpassword,image)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const updateData = {}

            if (name) {
                updateData.name = name
            }

            if (email) {
                updateData.email = email
            }


            if (password) {
                updateData.password = password
            }

            if (confirmpassword) {
                updateData.confirmpassword = confirmpassword
            }

            if (image) {
                updateData.image = image
            }


            const result = await collection.updateOne(
                {_id: new ObjectId(id)},
                {$set:updateData}
            )


            return result.matchedCount > 0
        } catch (error) {
            console.log("Error: ",error)
            return false
        }
    }


    deleteInfo = async(id)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("shop")
            const result = await collection.deleteOne(
                {_id:new ObjectId(id)}
            )


            return result.deletedCount > 0
        } catch (error) {
            console.log("Error: ",error)
            return false
        }
    }
}


module.exports = new HeadPhoneModel()