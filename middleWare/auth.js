const jwt = require(`jsonwebtoken`);

module.exports = async (req, res, next) => {
  try {
    const token = req.header(`token`);
    if (token) {
      jwt.verify(token, `shhhh`, (err, decoded) => {
        if (err) {
          res.json({ message: `invalid token` });
        } else {
          if (decoded.isLoggedIn) {
            req.userName = decoded.userName;
            req.userId = decoded.userId;
            next();
          } else {
            res.json({ message: `please logged in first` });
          }
        }
      });
    }else{
      res.json({ message: `token not exist` });
    }
  } catch (error) {
    res.json({ message: "catch auth error", error });
  }
};
