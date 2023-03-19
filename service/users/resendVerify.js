const { User } = require("../../models");
const { RequestError } = require("../../helpers");
const { sendEmail } = require("../../service/email");
const resendVerify = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(400, "Email not found");
  }
  const { verificationToken, verify } = user;
  if (verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  await sendEmail(email, verificationToken);
};
module.exports = resendVerify;
