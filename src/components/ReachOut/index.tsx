import ContLimits from "../ContLimits"
import SwitchFlex from "../SwitchFlex"
import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import ReachOutForm from "../Forms/ReachOutForm"

const ReachOut = () => {
  return (
    <ContLimits maxW="75rem" margin="auto" mb="4rem">
      <SwitchFlex
        bg="white"
        boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
        p="3rem 2rem"
        borderRadius="12px"
        border="1px solid"
        borderColor="bcon.gray.light"
      >
        <Flex flex="1" direction="column">
          <Heading as="h4" size="md" fontWeight="300" color="bcon.gray.dark">
            REACH OUT TO US
          </Heading>
          <Heading
            as="h2"
            fontWeight="400"
            p="1.75rem 0"
            color="bcon.gray.dark"
            position="relative"
            _after={{
              content: `''`,
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "30%",
              height: "2px",
              bg: "bcon.teal.primary",
            }}
          >
            Get a Free Consultation!
          </Heading>
          <Text w={{ base: "100%", lg: "85%" }} p="1rem 0">
            Tell us about your organization and how we can help you, and a
            member of our team will reach out to you shortly to see how we can
            help you achieve your goals!
          </Text>
          <chakra.a
            href="mailto:info@boulesconsulting.org"
            p={{ base: ".5rem 0", lg: "0.5rem 1rem" }}
            textAlign={{ base: "center", lg: "left" }}
            color="bcon.teal.primary"
            _hover={{ textDecoration: "underline" }}
          >
            <Box mr="1rem" as="span">
              <EmailIcon />
            </Box>
            info@boulesconsulting.org
          </chakra.a>
          <chakra.a
            href="tel:18185992692"
            p={{ base: ".5rem 0", lg: "0.5rem 1rem" }}
            textAlign={{ base: "center", lg: "left" }}
            color="bcon.teal.primary"
            _hover={{ textDecoration: "underline" }}
          >
            <Box mr="1rem" as="span">
              <PhoneIcon />
            </Box>
            +1(818) 599-2692
          </chakra.a>
        </Flex>

        <ReachOutForm />
      </SwitchFlex>
    </ContLimits>
  )
}

export default ReachOut
