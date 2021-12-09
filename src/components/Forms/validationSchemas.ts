import * as yup from "yup"

const subscribeFormSchema = yup.object().shape({
  email: yup.string().required().email(),
})

export { subscribeFormSchema }
