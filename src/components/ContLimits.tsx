import { Box, BoxProps } from "@chakra-ui/layout"
import React from "react"

type ContLimitProps = BoxProps & {
  innerPadding?: boolean
}

const ContLimits: React.FC<ContLimitProps> = ({
  children,
  innerPadding = true,
  ...boxProps
}) => {
  return (
    <Box w="100%" {...boxProps}>
      <Box
        maxW="100rem"
        margin="auto"
        height="inherit"
        p={innerPadding && { base: "1rem", lg: "1.875rem 3rem" }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ContLimits
