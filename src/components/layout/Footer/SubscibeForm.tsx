import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { HStack } from "@chakra-ui/layout"
import React from "react"
import { useForm } from "react-hook-form"

const SubscibeForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <Input
          placeholder="Email:"
          bg="white"
          borderRadius="1.5rem"
          color="bc.gray.primary"
          {...register("email")}
        />
        <Button
          borderRadius="1.5rem"
          bg="bc.gray.primary"
          p="0 2rem"
          type="submit"
          _hover={{ bg: "bc.gray.dark" }}
          fontWeight="400"
        >
          Subscribe!
        </Button>
      </HStack>
    </form>
  )
}

export default SubscibeForm
