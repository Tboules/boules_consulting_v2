import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { chakra } from "@chakra-ui/system"
import { Textarea } from "@chakra-ui/textarea"
import React from "react"
import { useForm } from "react-hook-form"

const ReachOutForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <chakra.form flex="1" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input {...register("name")} />
      </FormControl>
      <FormControl pt="1rem">
        <FormLabel>Email:</FormLabel>
        <Input {...register("email")} />
      </FormControl>
      <FormControl pt="1rem">
        <FormLabel>Tell Us What You're Looking For:</FormLabel>
        <Textarea minH="12rem" {...register("description")} />
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
  )
}

export default ReachOutForm
