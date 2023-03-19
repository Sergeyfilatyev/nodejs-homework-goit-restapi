const htmlResponse = (email) => {
  return `
   <html>
    <head>
      <title>Verification successful</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        h1 {
          color: #333;
          padding-top:20px;
          text-align: center;
        }
        p {
          font-size: 18px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>Verification successful</h1>
      <p>Your account ${email} has been successfully verified.</p>
    </body>
  </html>
`;
};
const htmlEmail = (BASE_URL, verificationToken) => {
  return `<div style="background-color: #f2f2f2; padding: 20px;">
      <h2 style="color: #333; font-family: Arial, sans-serif;">Site registration confirmation</h2>
      <p style="color: #333; font-family: Arial, sans-serif;">Click the button below to confirm your registration:</p>
      <a target="_blank" style="background-color: #008CBA; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-family: Arial, sans-serif;" href="${BASE_URL}/api/users/verify/${verificationToken}">Confirm Registration</a>
    </div>`;
};
module.exports = { htmlEmail, htmlResponse };
