import { Flex } from "@chakra-ui/layout"
import ContLimits from "../../ContLimits"
import React from "react"
import CUForm from "./CUForm"

const CUFormArea = () => {
  return (
    <ContLimits h={{ base: "100%", lg: "46rem" }}>
      <Flex
        bg="white"
        p={{ base: "1.5rem", lg: "3rem" }}
        h="110%"
        transform={{ base: "none", lg: "translateY(-7.5rem)" }}
        borderRadius="2rem"
        boxShadow="1px 2px 3px 1px rgba(0, 0, 0, 0.2)"
      >
        <CUForm />
      </Flex>
    </ContLimits>
  )
}

export default CUFormArea
