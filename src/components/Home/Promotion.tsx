import ContLimits from "../ContLimits"
import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Button, chakra, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import SwitchFlex from "../SwitchFlex"

const Promotion = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <ContLimits>
      <Flex justifyContent="center" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Heading as="h6" size="md" textAlign="center">
            Grab your
            <Box as="span" color="bcon.babyBlue" p="0 .2rem">
              FREE
            </Box>
            grant proposal template and checklist by entering your email below!
          </Heading>

          <chakra.form w="100%">
            <SwitchFlex w="inherit" p="1rem">
              <Input
                placeholder="Email:"
                bg="white"
                borderRadius="1.5rem"
                color="bcon.gray.primary"
                {...register("email")}
                fontSize={{ base: ".875rem", xl: "1rem" }}
                border="2px solid"
                borderColor="bcon.teal.primary"
                mr="1rem"
                mb={{ base: ".5rem", lg: 0 }}
              />
              <Button
                borderRadius="1.5rem"
                bg="bcon.teal.primary"
                p="1rem 3rem"
                type="submit"
                _hover={{ bg: "bcon.gray.dark" }}
                fontWeight="500"
                fontSize={{ base: ".875rem", xl: "1rem" }}
                color="white"
              >
                {" "}
                Get Your Template
              </Button>
            </SwitchFlex>
          </chakra.form>
        </Box>
      </Flex>
    </ContLimits>
  )
}

export default Promotion
