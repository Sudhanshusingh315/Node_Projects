const {check} = require('express-validator');

exports.registerValidtor =[ 

    check('name','Name is required').not().isEmpty().isString(),

    check('email', 'Email is required').notEmpty().isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),

    check('mobile','Mobile No. should be of 10 digits').isLength({
        min:10,
        max:10
    }),
    
    check('password','Password must be greater than 6 character and contain at least one Uppercase letter, atleast one lowercase letter, and one number and one special character')
    .isStrongPassword({
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
    })
]
