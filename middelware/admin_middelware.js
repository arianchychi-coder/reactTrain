const adminAuthOrization = async(req,res,next)=>{
    if (!req.user || req.user.role !== "admin") {
        console.log("403 from admin middelware")

        return res.status(403).json({message:"Admin access requierd"})
    }

    next()
}
module.exports = adminAuthOrization