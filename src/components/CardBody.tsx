import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

const CardBody: React.FC<FlexProps> = ({ children, ...flexProps }) => {
  return (
    <Flex
      bg="#fff"
      borderRadius="0.75rem"
      boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
      direction="column"
      p="1.2rem"
      {...flexProps}
    >
      {children}
    </Flex>
  )
}

export default CardBody
