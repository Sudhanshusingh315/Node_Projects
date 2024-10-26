const {check} = require('express-validator');
console.log("inside req validtion file")
exports.registerValidtor =[ 

    check('name','Name is required').not().isEmpty().isString(),

    check('email', 'Email is required').notEmpty().isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),

    check('mobile','Mobile No. should be of 10 digits').isLength({
        min:10,
        max:10
    }),
    
    check('password','Password must be longer than 6 character')
    .isLength({
        min:6,
    })
]
