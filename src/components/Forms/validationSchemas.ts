import * as yup from "yup"

const singleEmailSchema = yup.object().shape({
  senderEmail: yup.string().required().email(),
})

const emailSchema = yup.object().shape({
  senderName: yup.string().required(),
  senderEmail: yup.string().required().email(),
  body: yup.string().required("Please let us know how we can help you"),
})

export { singleEmailSchema, emailSchema }
