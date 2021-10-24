import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { ContentfulCarouselImages } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import useCustomEmbla from "../../hooks/useCustomEmbla"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type OurHappyCustomersProps = {
  data: ContentfulCarouselImages
}

const OurHappyCustomers: React.FC<OurHappyCustomersProps> = ({ data }) => {
  const { refs, next, previous } = useCustomEmbla({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  })

  return (
    <ContLimits p="2rem 0">
      <Heading textAlign="center" fontWeight="600">
        Some Of Our Happy Customers
      </Heading>
      <Box p="2rem 0" w="100%" overflow="hidden" ref={refs.firstRef}>
        <Flex alignItems="center">
          {data.images.map((img, i) => {
            const image = getImage(img.gatsbyImageData)

            return (
              <Box
                flex={{ base: "0 0 50%", lg: "0 0 20%" }}
                m="0 2rem"
                position="relative"
              >
                <GatsbyImage image={image} alt="happy customer logo" />
              </Box>
            )
          })}
        </Flex>
      </Box>
    </ContLimits>
  )
}

export default OurHappyCustomers
