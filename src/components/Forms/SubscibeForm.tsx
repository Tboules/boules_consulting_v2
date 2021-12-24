import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { VStack, Text } from "@chakra-ui/layout"
import { chakra, useDisclosure } from "@chakra-ui/react"
import GeneralModal from "../Modals/GeneralModal"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import api from "../../utils/api"
import { yupResolver } from "@hookform/resolvers/yup"
import { singleEmailSchema } from "./validationSchemas"
import FormErrorMsg from "./FormErrorMsg"

const SubscibeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singleEmailSchema),
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = async data => {
    try {
      await api.mailChimpAdd(data.senderEmail)
      onOpen()
      reset()
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  }

  return (
    <>
      <chakra.form w="inherit" onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <Input
            boxShadow="1px 2px 3px rgba(0, 0, 0, 0.1)"
            isInvalid={errors.senderEmail ? true : false}
            placeholder="Email:"
            bg="white"
            borderRadius="1.5rem"
            color="bcon.gray.primary"
            {...register("senderEmail")}
            fontSize={{ base: ".875rem", xl: "1rem" }}
            w="90%"
            h="3rem"
          />
          <FormErrorMsg errorMessage={errors.senderEmail?.message} />
          <Button
            borderRadius="1.5rem"
            bg="transparent"
            border="1px solid white"
            p="0 2rem"
            type="submit"
            _hover={{ bg: "bcon.gray.dark" }}
            fontWeight="400"
            fontSize="1rem"
            w="90%"
            h="3rem"
            boxShadow="1px 2px 3px rgba(0, 0, 0, 0.1)"
          >
            Subscribe!
          </Button>
        </VStack>
      </chakra.form>

      <GeneralModal
        isOpen={isOpen}
        onClose={onClose}
        title="Thank you for signing up!"
      >
        <Text>Together we will make the world a better place!</Text>
      </GeneralModal>
    </>
  )
}

export default SubscibeForm
