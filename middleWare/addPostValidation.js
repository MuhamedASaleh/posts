const {check} = require(`express-validator`)

module.exports = [
    check(`title`).notEmpty(),
    check(`description`).notEmpty(),
]

