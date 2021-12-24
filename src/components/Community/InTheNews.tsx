import React from "react"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { ContentfulImageCards } from "../../../graphql-types"
import ContLimits from "../../components/ContLimits"
import BlueSecHeader from "./SectionHeaders/BlueSecHeader"
import CardGrid from "../../components/CardGrid"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { chakra } from "@chakra-ui/react"

type InTheNewsProps = {
  data: ContentfulImageCards[]
}

const InTheNews: React.FC<InTheNewsProps> = ({ data }) => {
  return (
    <ContLimits p="0 0 3rem">
      <BlueSecHeader title="In The News" />
      <CardGrid numOfColumns={3}>
        {data.map(card => {
          const image = getImage(card.image.gatsbyImageData)
          return (
            <Flex
              key={card.title}
              flexDir="column"
              boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
              borderRadius="1rem"
            >
              <GatsbyImage
                style={{ borderRadius: "1rem", overflow: "hidden" }}
                imgStyle={{ borderRadius: "1rem" }}
                image={image}
                alt="in the news thumbnail"
              />
              <Text p="1rem 1rem 1.2rem">{card.title}</Text>
              <chakra.a
                p="0 1rem 1rem"
                color="bcon.teal.primary"
                _hover={{ textDecoration: "underline" }}
                href={card.button.buttonLink}
              >
                Read More
              </chakra.a>
            </Flex>
          )
        })}
      </CardGrid>
    </ContLimits>
  )
}

export default InTheNews
