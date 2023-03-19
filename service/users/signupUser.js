const { User } = require("../../models");
const { RequestError } = require("../../helpers");
const { sendEmail } = require("../../service/email");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const signupUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  await sendEmail(email, verificationToken);
  return newUser;
};

module.exports = signupUser;
