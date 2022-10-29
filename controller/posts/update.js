const postModel= require(`../../model/posts`)

module.exports = async(req,res)=>{
    const {id,title,description} = req.body
    try {
        await postModel.findOneAndUpdate({_id:id},{title,description})
        res.json({message:"updated"})
    } catch (error) {
       res.json({message:"catch error in update post"}) 
    }
}