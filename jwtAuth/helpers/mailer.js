const nodemailer = require('nodemailer');
const {nodemailerConfig} = require('../constants/constans')
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:parseInt(nodemailerConfig.port),
    secure:false,
    auth:{
        user:nodemailerConfig.user,
        pass:nodemailerConfig.pass
    }
});


const sendEmail = async(user,subject,message) =>{
    try{

        const info = await transporter.sendMail({
            from:nodemailerConfig.user,
            to:user,
            subject,
            html: message
        });
        console.log(info);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    sendEmail
}