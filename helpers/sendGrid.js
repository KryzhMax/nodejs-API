// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
const { SEND_GRID } = process.env;

sgMail.setApiKey(SEND_GRID);

const sendEmail = async (data) => {
  console.log(data);
  const mail = { ...data, from: "maximkryzhanvosky@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;

// const msg = {
//   to: "maximkryzhanvosky@gmail.com", // Change to your recipient
//   from: "maximkryzhanvosky@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
