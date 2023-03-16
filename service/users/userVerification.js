const { User } = require("../../models/");
const { RequestError } = require("../../helpers");

const userVerification = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw RequestError(404);
  }
  const data = await User.findByIdAndUpdate(
    user._id,
    {
      verify: true,
      verificationToken: "",
    },
    { new: true }
  );
  return data;
};
module.exports = userVerification;
