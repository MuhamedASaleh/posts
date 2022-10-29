const postModel = require(`../../model/posts`)

module.exports = async(req,res) => {
    try {
      const allPost = await postModel.find({}).populate(`userId`,`firstName`)
    res.json({allPost})  
    } catch (error) {
        res.json({message:'catch home error' , error})
    }
    
}