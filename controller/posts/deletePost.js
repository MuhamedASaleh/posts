const postModel = require(`../../model/posts`)

module.exports = async(req,res)=>{
    try {
        await postModel.findOneAndDelete({_id:req.params.post})
        res.json({message:"all posts delete"})
    } catch (error) {
        res.json({message:"catch error in delete post"})
    }
}
