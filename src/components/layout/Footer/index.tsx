import ContLimits from "../../../components/ContLimits"
import React from "react"
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import SubscibeForm from "./SubscibeForm"
import FooterNav from "./FooterNav"

const FooterHeading = ({ title }: { title: string }) => {
  return (
    <Heading fontWeight="400" borderBottom="1px solid white" p="0.3rem">
      {title}
    </Heading>
  )
}

const Footer = () => {
  return (
    <ContLimits bg="bc.teal.primary" height="23.75rem" color="white">
      <Flex height="90%">
        <VStack h="100%" p="1rem">
          <FooterHeading title="Subscribe Today!" />
          <Flex flex="1" alignItems="center">
            <SubscibeForm />
          </Flex>
        </VStack>
        <VStack h="100%" p="1rem">
          <FooterHeading title="Useful Links" />
          <FooterNav />
        </VStack>
      </Flex>
      <Flex
        pos="absolute"
        bottom="0"
        left="50%"
        justifyContent="center"
        alignItems="center"
        width={{ base: "calc(100% - 2rem)", lg: "calc(100% - 6rem)" }}
        borderTop="1px solid white"
        transform="translateX(-50%)"
        p={{ base: ".7rem 1rem", lg: ".7rem 3rem" }}
      >
        <Text>Boules Consulting © 2021</Text>
      </Flex>
    </ContLimits>
  )
}

export default Footer
