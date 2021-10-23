import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import ContLimits from "../ContLimits"

type TestimonialsProps = {
  data: any
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  console.log(data)

  return (
    <ContLimits color="black">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </ContLimits>
  )
}

export default Testimonials
