import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { ContentfulTextAndImage } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

type WhatWeDoProps = {
  data: ContentfulTextAndImage
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ data }) => {
  console.log(data)
  const image = getImage(data.image.gatsbyImageData)

  return (
    <ContLimits p="3rem 0">
      <Heading mb="2rem" w="100%" textAlign="center" color="bcon.teal.dark">
        {data.title}
      </Heading>
      <Flex>
        <Box
          flex="6"
          dangerouslySetInnerHTML={{ __html: data.text.text }}
          fontSize={{ base: "1rem", lg: "1.15rem" }}
        ></Box>
        <Flex
          p="1rem"
          display={{ base: "none", lg: "flex" }}
          justifyContent="center"
          alignItems="center"
          flex="4"
        >
          <StaticImage
            src="../../assets/logos/Boules-Consulting-Logo-Big.svg"
            alt="Boules Consulting Logo"
            style={{ height: "100%", width: "100%" }}
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </ContLimits>
  )
}

export default WhatWeDo
