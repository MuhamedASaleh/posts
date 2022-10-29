
/*

const userModel = require(`../model/user`)

module.exports = (req,res)=>{
    const token = req.params.token
    jwt.verify(token,`shhhh`,async(err,decoded)=>{
        if(err){
            res.json({message:`token error`})
        }else {
            let email = decoded.email
            await userModel.findByIdAndUpdate({email},{confirmed:true})
            res.status(200).json({message:`confirmed`})
        }
    })
}
*/