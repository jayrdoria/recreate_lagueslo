const express = require("express");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

app.use(cors());

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { type, email, name, message } = req.body;

  let params;
  if (type === "newsletter") {
    params = {
      Destination: {
        ToAddresses: ["info@lagueslo.com"], // Replace with your email if you want to send to yourself
      },
      Message: {
        Body: {
          Text: { Data: "Thanks for subscribing to our newsletter!" },
        },
        Subject: { Data: "Subscription Confirmation" },
      },
      Source: "info@lagueslo.com", // Replace with your verified SES email
    };
  } else if (type === "contact") {
    params = {
      Destination: {
        ToAddresses: ["info@lagueslo.com"], // Replace with your email
      },
      Message: {
        Body: {
          Text: { Data: `Message from ${name} (${email}): ${message}` },
        },
        Subject: { Data: "New Contact Form Submission" },
      },
      Source: "info@lagueslo.com", // Replace with your verified SES email
    };
  }

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
