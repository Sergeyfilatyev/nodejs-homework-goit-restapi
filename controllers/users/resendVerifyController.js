const { resendVerify } = require("../../service/users");
const resendVerifyController = async (req, res) => {
  const { email } = req.body;
  await resendVerify(email);
  res.json({ status: "success", message: "Verification email resend" });
};
module.exports = resendVerifyController;
