const postModel = require(`../../model/posts`);
const {validationResult} = require(`express-validator`)

module.exports = async (req, res) => {
  try {
    const { title, description } = req.body;
    const addPostError = validationResult(req)
    const userId = req.userId
    
    if (addPostError.isEmpty()) {
        await postModel.insertMany({ title, description , userId});
        res.status(200).json({ message: "post added" });
    } else {
        res.json({ message: `error in validation add post`,messageError:addPostError.array() });
    }
  } catch (error) {
    res.json({ message: `catch error in adding post` });
  }
};
