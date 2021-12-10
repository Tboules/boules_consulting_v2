import ContLimits from "../ContLimits"
import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/layout"

import PromotionForm from "../Forms/PromotionForm"

const Promotion = () => {
  return (
    <ContLimits>
      <Flex justifyContent="center" p="2rem 0">
        <Box>
          <Heading as="h6" size="lg" textAlign="center">
            Grab your
            <Box as="span" color="bcon.babyBlue" p="0 .5rem">
              FREE
            </Box>
            grant proposal template and checklist by entering your email below!
          </Heading>

          <PromotionForm />
        </Box>
      </Flex>
    </ContLimits>
  )
}

export default Promotion
