const nodemailer = require("nodemailer");
require("dotenv").config();

const {UKR_NET_PASSWORD, UKR_NET_FROM}=process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: UKR_NET_FROM,
        pass: UKR_NET_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);
    
// const email = {
//     from: UKR_NET_FROM,
//     to: "kofeh96241@tsderp.com",
//     subject: "Test email",
//     html: "<strong>Test email</strong>"
// }

// transport.sendMail(email)
// .then(()=> console.log("Email send success"))
// .catch(error=> console.log(error.message))
const sendEmail=async date=>{
    const email = {...data, from: UKR_NET_FROM};
    await transport.sendMail(email);
    return true;
};

module.exports = sendEmail;