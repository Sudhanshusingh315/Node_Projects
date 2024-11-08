const {check} = require('express-validator');

registerValidator = [
    check('name','Name is required').notEmpty().isString(),
    check('email','Email is not a valid email').notEmpty().isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').notEmpty()
]

loginValidator = [
    check('email','Enter a valid email').notEmpty().isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password can not be empty').notEmpty().isString()
]

permissionValidator = [
    check('permission_name','Permissoin name must be provided').notEmpty().isString()
]



module.exports = {
    registerValidator,
    loginValidator,
    permissionValidator
}

