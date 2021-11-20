import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"

type BlueSecHeaderProps = {
  title: string
}

const BlueSecHeader: React.FC<BlueSecHeaderProps> = ({ title }) => {
  return (
    <Flex pb="2.5rem">
      <Heading
        color="bcon.teal.primary"
        fontWeight="500"
        mr="2.5rem"
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
        <Box h=".15rem" w="100%" bg="bcon.teal.primary"></Box>
      </Flex>
    </Flex>
  )
}

export default BlueSecHeader
