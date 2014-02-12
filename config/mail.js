module.exports = {
  service: "SendGrid",
  host: "smtp.sendgrid.net",
  port: 587,
  secureConnection: false,
  //name: "servername",
  auth: {
    user: "amsheehan",
    pass: "F#ot2jbi"
  },
  ignoreTLS: false,
  debug: false,
  maxConnections: 5 // Default is 5
}
