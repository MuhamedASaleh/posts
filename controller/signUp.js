const { validationResult } = require(`express-validator`);
const bcrypt = require(`bcryptjs`);
const userModel = require(`../model/user`);
const nodemailer = require(`nodemailer`);

// const transport = nodemailer.createTransport({
//     service:`gmail`,
//     auth:{
//         user: "oonoomagek3@gmail.com",
//         pass: "Mosale@1911",
//     }
// })

module.exports = async (req, res, next) => {
  const { firstName, LastName, email, password, confirmPassword } = req.body;
  try {
    const signUpError = validationResult(req);
    if (!signUpError.isEmpty()) {
      res.status(500).json(signUpError.array());
      throw new Error(`validation error`);
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 12,async (err,hash)=>{
        if (err) {
            res.json({message:`hash error`})
        } else {
            // let token = jwt.sign({email},`shhhh`)
            // await transport.sendMail({
            //     from:`oonoomagek3@gmail.com`,
            //     to:email,
            //     subject:`hello`,
            //     text:`hello world`,
            //     html:`<a href="http://localhost:3000/checkemail/${token}>confirmed</a>`,
            // })
            await userModel.insertMany({
        firstName,
        LastName,
        
        email,
        password: hash,
      });
      res.status(201).json({ message: `one user added` }); 
        }
      })
     
    } else {
      res.status(500).json({ message: `email already exist` });
    }
  } catch (error) {
    res.json({ message: `catch error in signup`, error });
  }
};

