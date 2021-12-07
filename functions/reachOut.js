const client = require("@sendgrid/mail")
require("dotenv").config()

exports.handler = async function (e, context, callback) {
  console.log(e)
  const { body, senderName, senderEmail } = JSON.parse(e.body)

  console.log(body, senderName, senderEmail)

  client.setApiKey(process.env.SEND_GRID_KEY)

  const data = {
    to: "info@boulesconsulting.org",
    from: "info@boulesconsulting.org",
    subject: `Marketing Site email from ${senderName} / ${senderEmail}`,
    html: body,
  }

  try {
    const res = await client.send(data)
    //response is json
    console.log("response", res)
    return callback(null, { statusCode: res[0].Response.statusCode })
  } catch (error) {
    console.log(error)
  }
}
