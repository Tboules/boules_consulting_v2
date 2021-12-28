import BCLink from "../../../components/BCLink"
import { Heading, HStack } from "@chakra-ui/layout"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import DesktopNav from "./DesktopNav"
import MobileCollapse from "./MobileCollapse"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <>
      <Helmet>
        <meta
          name="facebook-domain-verification"
          content="pfl38fjc5h40o1qjswwwz1xi9db5od"
        />
      </Helmet>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        width="100%"
        p={{ base: "1rem", lg: "1.875rem 3rem" }}
        bg="white"
      >
        <BCLink to="/">
          <HStack spacing={{ base: 3, lg: 5 }}>
            <StaticImage
              src="../../../assets/logos/Boules-Consulting-Logo.svg"
              alt="Boules Consulting Logo"
            />
            <Heading
              color="bcon.teal.primary"
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
    </>
  )
}

export default Header
