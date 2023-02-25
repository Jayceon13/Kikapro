const nodemailer = require("nodemailer");

exports.handler = async function (event, context, callback) {
  // Parse the JSON text received.
  const body = JSON.parse(event.body);

  // Extract the required parameters from the body.
  const { namesur, phone, email, request } = body;

  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 405, body: 'Method Not Allowed' });
    return;
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: 'info.ea.send@mail.ru', // generated ethereal user
      pass: '8szFb7G1uMtQ5r2Yy7Fm', // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'info.ea.send@mail.ru',
      to: 'alferukk@gmail.com',
      subject: "New request",
      text: `
        Name: ${namesur}
        Phone Number: ${phone}
        Email: ${email}
        Request: ${request}
      `,
    });
    // Log the result
    console.log(info);
    callback(null, { statusCode: 200, body: JSON.stringify(info) });
  } catch (error) {
    // Catch and log error.
    callback(error);
  }
};
