import ContLimits from "../../../components/ContLimits"
import React from "react"
import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout"
import SubscibeForm from "./SubscibeForm"
import FooterNav from "./FooterNav"
import { StaticImage } from "gatsby-plugin-image"
import { EmailIcon } from "@chakra-ui/icons"

const FooterHeading = ({ title }: { title: string }) => {
  return (
    <Heading fontWeight="400" borderBottom="1px solid white" p="0.3rem">
      {title}
    </Heading>
  )
}

const Footer = () => {
  return (
    <ContLimits
      bg="bc.teal.primary"
      height={{ base: "auto", lg: "23.75rem" }}
      color="white"
    >
      <Flex height="90%" direction={{ base: "column", lg: "row" }}>
        <VStack h="100%" p="1rem" flexBasis="25%" spacing={{ base: 10, lg: 0 }}>
          <FooterHeading title="Subscribe Today!" />
          <Flex flex="1" alignItems="center">
            <SubscibeForm />
          </Flex>
        </VStack>
        <VStack h="100%" p="1rem" flexBasis="25%" spacing={{ base: 8, lg: 0 }}>
          <FooterHeading title="Useful Links" />
          <FooterNav />
        </VStack>
        <VStack h="100%" p="1rem" flexBasis="25%" spacing="2.5rem">
          <FooterHeading title="Contact" />
          <HStack>
            <a href="mailto:info@boulesconsulting.org">
              <EmailIcon color="white" w={5} h={5} mr=".75rem" />
              info@boulesconsulting.org
            </a>
          </HStack>
          <HStack spacing={8}>
            <a href="/">
              <StaticImage
                src="../../../assets/icons/linkedin.svg"
                alt="facebook link"
              />
            </a>
            <a href="/">
              <StaticImage
                src="../../../assets/icons/facebook.svg"
                alt="facebook link"
              />
            </a>
            <a href="/">
              <StaticImage
                src="../../../assets/icons/instagram.svg"
                alt="facebook link"
              />
            </a>
          </HStack>
        </VStack>
        <Flex
          h="100%"
          p={{ base: "2rem 1rem 5rem", lg: "1rem" }}
          flexBasis="25%"
          justifyContent="center"
          alignItems="center"
        >
          <StaticImage
            src="../../../assets/logos/Boules-Consulting-Logo-White.svg"
            alt="Boules Consulting White Logo"
            objectFit="cover"
          />
        </Flex>
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
