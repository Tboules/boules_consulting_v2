import addToMailchimp from "gatsby-plugin-mailchimp"

export type Email = {
  body: string
  senderName: string
  senderEmail: string
}

export type PromoEmail = {
  senderEmail: string
}

const reachOutEmail = (data: Email) => {
  const opts: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }

  return fetch("/.netlify/functions/reachOut", opts)
}

const sendPromoFile = (data: PromoEmail) => {
  const opts: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
  return fetch("/.netlify/functions/promoEmail", opts)
}

const mailChimpAdd = (email: string, name?: string) => {
  if (name) {
    return addToMailchimp(email, { FNAME: name })
  }
  return addToMailchimp(email)
}

export default {
  reachOutEmail,
  mailChimpAdd,
  sendPromoFile,
}
