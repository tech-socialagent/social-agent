const mailgun = require('mailgun-js');

const mg = mailgun({ apiKey: 'YOUR_MAILGUN_API_KEY', domain: 'YOUR_MAILGUN_DOMAIN' });

const sendEmail = async (from, subject, text) => {
  const data = {
    from,
    to:"naveenprasanth@socialagent.in",
    subject,
    text,
  };

  try {
    await mg.messages().send(data);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };