const {check} = require('express-validator');

registerValidator = [
    check('name','Name is required').notEmpty().isString(),
    check('email','Email is not a valid email').notEmpty().isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').notEmpty()
]


module.exports = {
    registerValidator,
}

