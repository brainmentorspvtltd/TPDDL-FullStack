var nodemailer = require('nodemailer');
function sendMail(receivers,subject, body ){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'youremail@address.com',
           pass: 'yourpassword'
       }
   });
   const mailOptions = {
    from: 'sender@email.com', // sender address
    to: receivers, // list of receivers
    subject: subject, // Subject line
    html: body// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
}
module.exports = sendMail;