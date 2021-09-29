import BCLink from "../../../components/BCLink"
import { Heading, HStack } from "@chakra-ui/layout"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import DesktopNav from "./DesktopNav"
import MobileCollapse from "./MobileCollapse"

const Header = () => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      p={{ base: "1rem", lg: "1.875rem 3rem" }}
    >
      <BCLink to="/">
        <HStack spacing={{ base: 3, lg: 5 }}>
          <StaticImage
            src="../../../assets/logos/Boules-Consulting-Logo.svg"
            alt="Boules Consulting Logo"
          />
          <Heading
            color="bc.teal.primary"
            fontSize={{ base: "1.375rem", lg: "1.825rem", xl: "2.275rem" }}
            maxW={{ base: "60%", lg: "100%" }}
          >
            Boules Consulting
          </Heading>
        </HStack>
      </BCLink>
      <MobileCollapse />
      <DesktopNav />
    </HStack>
  )
}

export default Header
