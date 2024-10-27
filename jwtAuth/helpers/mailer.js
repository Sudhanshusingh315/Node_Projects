const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"ss826063@gmail.com",
        pass:"hakb ickl xwen wepa"
    }
});


const sendEmail = async(user,subject,message) =>{
    try{

        const info = await transporter.sendMail({
            from:'ss826063@gmail.com',
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