const { userVerification } = require("../../service/users");
const { htmlResponse } = require("../../service/email");
const userVerificationController = async (req, res) => {
  const { verificationToken } = req.params;
  const { email } = await userVerification(verificationToken);
  res.send(htmlResponse(email));
};
module.exports = userVerificationController;
