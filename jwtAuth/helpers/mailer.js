const nodemailer  = require('nodemailer');
const {nodemailerConfig}  = require('../constants/constans');
const transporter = nodemailer.createTransport({
    host:nodemailerConfig.host,
    port:parseInt(nodemailerConfig.port),
    secure:false,
    requireTLS:true,
    auth:{
        user:nodemailerConfig.user,
        pass:nodemailerConfig.pass
    }
});

const sendMail = async(email,subject,content) =>{
    try{
        let sendMailConfig = {
            from:nodemailerConfig.user,
            to:email,
            subject,
            html:content
        }

        console.log(`mail configs are ${JSON.stringify(sendMailConfig,undefined,4)}`)

        const info = await transporter.sendMail(sendMailConfig);
        console.log(`Message sent to ${email} with info ${info.messageId}`);
    }catch(err){
        console.log(`Mail failed to send ${err}`);
    }
}

module.exports ={
    sendMail
}