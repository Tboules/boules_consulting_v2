import { Flex } from "@chakra-ui/layout"
import ContLimits from "../../ContLimits"
import React from "react"
import CUForm from "../../Forms/CUForm"

const CUFormArea = () => {
  return (
    <ContLimits p={{ base: "3rem 1rem", lg: "0rem 3rem" }} innerPadding={false}>
      <Flex
        bg="white"
        p={{ base: "3rem 1.5rem", lg: "3rem" }}
        transform={{ base: "none", lg: "translateY(-6.5rem)" }}
        borderRadius="2rem"
        boxShadow="1px 2px 3px 1px rgba(0, 0, 0, 0.2)"
      >
        <CUForm />
      </Flex>
    </ContLimits>
  )
}

export default CUFormArea
