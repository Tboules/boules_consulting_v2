type Email = {
  body: string
  senderName: string
  senderEmail: string
}

const reachOutEmail = async (data: Email) => {
  const opts: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }

  try {
    const res = await fetch("/.netlify/functions/reachOut", opts)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export default {
  reachOutEmail,
}
