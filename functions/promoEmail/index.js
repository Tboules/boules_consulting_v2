const client = require("@sendgrid/mail")
require("dotenv").config()
const fs = require("fs")

exports.handler = async function (e, context, callback) {
  const { senderEmail } = JSON.parse(e.body)

  client.setApiKey(process.env.SEND_GRID_KEY)
  pathToAttachment = `${__dirname}/MNC.pdf`
  attachment = fs.readFileSync(pathToAttachment).toString("base64")

  const data = {
    to: senderEmail,
    from: "info@boulesconsulting.org",
    subject: `${senderEmail} requested promotional material!`,
    html: `
      <h1>Thank You for Joining the Boules Consulting Team </h1>
      <br></br>
      <br></br>
      <p>Attached below you will find a checklist of everything that you need to do to create a great master narrative!</p>
    `,
    attachments: [
      {
        content: attachment,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  }

  try {
    const res = await client.send(data)

    return callback(null, { statusCode: res[0].statusCode })
  } catch (error) {
    console.log(error)
  }
}
