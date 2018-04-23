var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'secure.emailsrvr.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'no-reply@rt7.net',
        pass: '****'
    },
    tls: {
        rejectUnauthorized: false
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
    from: 'no-reply@rt7.net',
    to: 'meetbivek@gmail.com,bivek_j@yahoo.com',
    subject: 'Sending email using node.js',
    //text: '<h1>Hello Bivek!</h1><p>How are you?</p>'
    html: '<h1>Hello Bivek!</h1><p>How are you?</p>'//find the difference between this line and line above.
};

transporter.sendMail(mailOptions,function(error,info){
   if(error){
       console.log(error);
   } else{
       console.log('Email sent:'+info.response);
   }
});