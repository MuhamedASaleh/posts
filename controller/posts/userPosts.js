
const postModel = require(`../../model/posts`)


module.exports = async(req,res)=>{
    try {
        const posts = await postModel.find({userId:req.userId}).populate(`userId`)
        res.json({posts:posts})
    } catch (error) {
        res.json({message:"catch error in userPosts" , error})
    }
}
