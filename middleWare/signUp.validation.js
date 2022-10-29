const { check } = require(`express-validator`);

module.exports = [
  check(`firstName`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
  check(`LastName`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
  check(`email`).isEmail(),
  check(`password`).matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$/
  ),
  check(`confirmPassword`).custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error(`password doesn't match confirmPassword`);
    } else {
      return true;
    }
  }),
];
