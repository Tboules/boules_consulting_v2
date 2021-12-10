import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input"
import { chakra, Text } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/textarea"
import GeneralModal from "../Modals/GeneralModal"
import React from "react"
import { useForm } from "react-hook-form"
import api, { Email } from "../../utils/api"
import { yupResolver } from "@hookform/resolvers/yup"
import { emailSchema } from "./validationSchemas"
import FormErrorMsg from "./FormErrorMsg"

const ReachOutForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(emailSchema) })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = async (data: Email) => {
    try {
      await api.reachOutEmail(data)
      await api.mailChimpAdd(data.senderEmail, data.senderName)
      onOpen()
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <chakra.form flex="1" onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            isInvalid={errors.senderName ? true : false}
            {...register("senderName")}
          />
          <FormErrorMsg errorMessage={errors.senderName?.message} />
        </FormControl>
        <FormControl pt="1rem">
          <FormLabel>Email:</FormLabel>
          <Input
            isInvalid={errors.senderEmail ? true : false}
            {...register("senderEmail")}
          />
          <FormErrorMsg errorMessage={errors.senderEmail?.message} />
        </FormControl>
        <FormControl pt="1rem">
          <FormLabel>Tell Us What You're Looking For:</FormLabel>
          <Textarea
            isInvalid={errors.body ? true : false}
            minH="12rem"
            {...register("body")}
          />
          <FormErrorMsg errorMessage={errors.body?.message} />
        </FormControl>
        <Button
          type="submit"
          mt="1.2rem"
          bg="bcon.teal.primary"
          _hover={{ bg: "bcon.teal.dark" }}
          color="white"
          p="1.4rem 3rem"
        >
          Send Message
        </Button>
      </chakra.form>
      <GeneralModal
        isOpen={isOpen}
        onClose={onClose}
        title="Thank you for reaching out!"
      >
        <Text>Together we will make the world a better place!</Text>
      </GeneralModal>
    </>
  )
}

export default ReachOutForm
