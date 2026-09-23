const multer = require("multer")
const path = require("path")
const fs = require("fs")


const uploadDir = "assets/images"

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir,{recursive:true})
}


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,uploadDir)
    },

    filename:(res,file,cb)=>{
        const uniqName = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null,uniqName + path.extname(file.originalname))
    }
})



const filterFile = (req,file,cb)=>{
    const allowdImage = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ]


    if (file.fieldname === "image") {
        allowdImage.includes(file.mimetype)
        cb(null,true)
    }
    else{
        throw new Error("Only JPG, PNG and WebP images are allowed for image")
    }
}


const upload = multer({
    storage,
    filterFile,

    limits:{
        fileSize: 500 * 1024 * 1024
    }
})


module.exports = upload