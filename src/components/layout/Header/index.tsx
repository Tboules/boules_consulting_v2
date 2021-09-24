import { Box, Heading, VStack } from "@chakra-ui/layout"
import React from "react"

const Header = () => {
  return (
    <Box display="block" height="7rem" width="100%" bg="bc.gray.white">
      <VStack
        maxW="100rem"
        justifyContent="center"
        alignItems="flex-start"
        margin="0 auto"
        height="100%"
      >
        <Heading color="bc.teal.primary">Boules Consulting</Heading>
      </VStack>
    </Box>
  )
}

export default Header
