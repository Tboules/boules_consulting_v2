import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

const SwitchFlex: React.FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} {...rest}>
      {children}
    </Flex>
  )
}

export default SwitchFlex
