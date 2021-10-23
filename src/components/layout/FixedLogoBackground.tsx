import { Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import React from "react"

//@ts-ignore
import logo from "../../assets/logos/Boules-Consulting-Logo.svg"

const FixedLogoBackground = () => {
  return (
    <Box h="150vh" w="100%" pos="fixed" top="0" left="0" zIndex="-100">
      <Image
        objectFit="cover"
        src={logo}
        alt="Logo Minimal Background"
        h="100%"
        margin="auto"
        transform="rotate(45deg)"
        opacity="0.03"
      />
    </Box>
  )
}

export default FixedLogoBackground
