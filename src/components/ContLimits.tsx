import { Box, BoxProps } from "@chakra-ui/layout"
import React from "react"

const ContLimits: React.FC<BoxProps> = ({ children, ...boxProps }) => {
  return (
    <Box w="100%" {...boxProps}>
      <Box
        maxW="100rem"
        margin="auto"
        height="inherit"
        p={{ base: "1rem", lg: "1.875rem 3rem" }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ContLimits
