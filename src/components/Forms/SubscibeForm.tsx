import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { VStack, Text } from "@chakra-ui/layout"
import { chakra, useDisclosure } from "@chakra-ui/react"
import GeneralModal from "../Modals/GeneralModal"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import api from "../../utils/api"
import { yupResolver } from "@hookform/resolvers/yup"
import { subscribeFormSchema } from "./validationSchemas"

const SubscibeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = async data => {
    try {
      await api.mailChimpAdd(data.email)
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
            isInvalid={errors.email ? true : false}
            placeholder="Email:"
            bg="white"
            borderRadius="1.5rem"
            color="bcon.gray.primary"
            {...register("email")}
            fontSize={{ base: ".875rem", xl: "1rem" }}
            w="90%"
            h="3rem"
          />
          {errors.email && (
            <Text color="red.700" fontSize=".8rem" fontWeight="bold">
              {errors.email.message}
            </Text>
          )}
          <Button
            borderRadius="1.5rem"
            bg="bcon.gray.primary"
            p="0 2rem"
            type="submit"
            _hover={{ bg: "bcon.gray.dark" }}
            fontWeight="400"
            fontSize={{ base: ".875rem", xl: "1rem" }}
            w="90%"
            h="3rem"
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
