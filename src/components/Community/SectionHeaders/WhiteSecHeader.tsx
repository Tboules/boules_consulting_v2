import { Box, Flex, Heading } from "@chakra-ui/layout"
import React from "react"

type WhiteSecHeaderProps = {
  title: string
}

const WhiteSecHeader = ({ title }) => {
  return (
    <Flex pb="2.5rem">
      <Flex
        display={{ base: "none", lg: "flex" }}
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Box h=".15rem" w="100%" bg="white"></Box>
      </Flex>
      <Heading
        color="white"
        fontWeight="500"
        m="0 4rem"
        display="inline"
        size="2xl"
      >
        {title}
      </Heading>
      <Flex
        display={{ base: "none", lg: "flex" }}
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Box h=".15rem" w="100%" bg="white"></Box>
      </Flex>
    </Flex>
  )
}

export default WhiteSecHeader
