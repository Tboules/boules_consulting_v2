const client = require("@sendgrid/mail")
require("dotenv").config()

exports.handler = async function (e, context, callback) {
  const { body, senderName, senderEmail } = JSON.parse(e.body)

  client.setApiKey(process.env.SEND_GRID_KEY)

  const data = {
    to: "info@boulesconsulting.org",
    from: "info@boulesconsulting.org",
    subject: `Marketing Site email from ${senderName} / ${senderEmail}`,
    html: body,
  }

  try {
    const res = await client.send(data)

    return callback(null, { statusCode: res[0].statusCode })
  } catch (error) {
    console.log(error)
  }
}
