import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"

import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, chakra, Textarea, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

type CUFormProps = {}

const CUForm: React.FC<CUFormProps> = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <chakra.form w="80%" m="auto" onSubmit={handleSubmit(onSubmit)}>
      <Heading fontWeight="500" textAlign="center" size="3xl">
        Submit An Inquiry
      </Heading>
      <Text m="3rem 0" fontWeight="300" fontSize="1.5rem">
        Tell us about your organization and how we can help you, and a member of
        our team will reach out to you shortly to see how we can help you
        achieve your goals!
      </Text>
      <FormControl display="flex">
        <FormLabel flex="2">Name:</FormLabel>
        <Input
          size="lg"
          borderColor="bcon.teal.primary"
          flex="4"
          {...register("name")}
        />
      </FormControl>
      <FormControl pt="1.2rem" display="flex">
        <FormLabel flex="2">Email:</FormLabel>
        <Input
          size="lg"
          borderColor="bcon.teal.primary"
          flex="4"
          {...register("email")}
        />
      </FormControl>
      <FormControl pt="1.2rem" display="flex">
        <FormLabel flex="2">Tell Us What You're Looking For:</FormLabel>
        <Textarea
          resize="none"
          borderColor="bcon.teal.primary"
          flex="4"
          minH="12rem"
          {...register("description")}
        />
      </FormControl>
      <Flex w="100%" justifyContent="center">
        <Box flex="2"></Box>
        <Flex justifyContent="center" flex="4" m="auto">
          <Button
            type="submit"
            mt="2.4rem"
            justifySelf="center"
            bg="bcon.teal.primary"
            _hover={{ bg: "bcon.teal.dark" }}
            color="white"
            p="1.6rem 4rem"
          >
            Send Message
          </Button>
        </Flex>
      </Flex>
    </chakra.form>
  )
}

export default CUForm
