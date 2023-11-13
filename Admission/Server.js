const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');
const cors = require('cors');

const app = express();

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Define a route to handle form submissions from your React app
app.post('/send-email', (req, res) => {
  // Replace these with your Email.js credentials
  const serviceId = 'service_v7c8xdi';
  const templateId = 'template_salrx3j';
  const userId = 'nPJUW3uiTKzd2Yia_';

  // Send the email using Email.js
  emailjs.send(serviceId, templateId, req.body, userId)
    .then((response) => {
      console.log('Email sent successfully', response);
      res.json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error('Email could not be sent', error);
      res.status(500).json({ error: 'Email could not be sent' });
    });
});

// Start the Express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
