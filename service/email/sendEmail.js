const nodemailer = require("nodemailer");
const { htmlEmail } = require("./htmlMarkup");
require("dotenv").config();
const { USER_MAIL, PASS_MAIL, BASE_URL, HOST_MAIL, PORT_MAIL } = process.env;

const sendEMail = async (userEmail, verificationToken) => {
  const transporter = nodemailer.createTransport({
    host: HOST_MAIL,
    port: PORT_MAIL,
    secure: true,
    auth: {
      user: USER_MAIL,
      pass: PASS_MAIL,
    },
  });
  const info = {
    from: USER_MAIL,
    to: userEmail,
    subject: "Site registration confirmation",
    text: "Click to confirm registration",
    html: htmlEmail(BASE_URL, verificationToken),
  };

  await transporter.sendMail(info);
};
module.exports = sendEMail;
