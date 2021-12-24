import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { chakra } from "@chakra-ui/react"

import ContLimits from "../ContLimits"
import CardGrid from "../CardGrid"
import WhiteSecHeader from "./SectionHeaders/WhiteSecHeader"

import { ContentfulImageCards } from "../../../graphql-types"

type CommunityBillboardProps = {
  data: ContentfulImageCards[]
}

const CommunityBillboard: React.FC<CommunityBillboardProps> = ({ data }) => {
  return (
    <ContLimits p="2rem 0 3rem" mb="4rem" bg="bcon.teal.primary">
      <WhiteSecHeader title="Community Billboard" />
      <CardGrid numOfColumns={2}>
        {data.map(card => {
          const image = getImage(card.image.gatsbyImageData)
          return (
            <Flex
              p="2rem"
              minH="22rem"
              bg="white"
              key={card.title}
              direction="column"
              boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                alignItems="center"
                mb="1rem"
                w="100%"
              >
                <GatsbyImage
                  style={{ width: "200px", margin: "0 .5rem" }}
                  objectFit="contain"
                  image={image}
                  alt="community org logo"
                />
                <Heading flex="1" size="md" textAlign="center" color="red.700">
                  {card.title}
                </Heading>
              </Flex>
              <Flex flex="1" alignItems="center">
                <Box
                  fontSize="1.2rem"
                  dangerouslySetInnerHTML={{
                    __html: card.text.childMarkdownRemark.html,
                  }}
                ></Box>
              </Flex>
              <Flex justifyContent="center" mt=".5rem">
                <chakra.a
                  bg="red.700"
                  borderRadius="3rem"
                  color="white"
                  href={card.button.buttonLink}
                  _hover={{ bg: "red.600" }}
                  p="1rem 4rem"
                  fontSize="1.1rem"
                >
                  {card.button.buttonText}
                </chakra.a>
              </Flex>
            </Flex>
          )
        })}
      </CardGrid>
    </ContLimits>
  )
}

export default CommunityBillboard
