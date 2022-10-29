const { validationResult } = require(`express-validator`);
const userModel = require(`../model/user`);
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const signInError = validationResult(req);
    if (signInError.isEmpty()) {
      const user = await userModel.findOne({ email });
      if (user) {
        const match = bcrypt.compare(user.password, password);
        if (match) {
          let token = jwt.sign(
            {
              userId: user._id,
              userName: user.firstName,
              isLoggedIn: true,
              expiresIn: `1h`,
            },
            `shhhh`
          );
          res
            .header({ token })
            .status(200)
            .json({ message: "signIn approved" });
        } else {
          res.status(404).json({ message: "wrong email or password" });
        }
      } else {
        res.status(404).json({ message: `email doesn't exist` });
      }
    } else {
      res.status(500).json({
        message: "validation result",
        ErrorMessage: signInError.array(),
      });
    }
  } catch (error) {
    res.json({ message: `catch error in signIn` });
  }
};
