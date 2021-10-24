import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout"
import ContLimits from "../ContLimits"
import { ContentfulStack } from "../../../graphql-types"
import CardBody from "../CardBody"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BCLink from "../BCLink"
import { CgArrowLongRight } from "react-icons/cg"
import { Icon } from "@chakra-ui/react"

type HowWeCanHelpProps = {
  data: ContentfulStack
}

const HowWeCanHelp: React.FC<HowWeCanHelpProps> = ({ data }) => {
  console.log(data)

  return (
    <ContLimits bg="bcon.teal.primary" color="white">
      <Heading
        fontWeight="600"
        as="h2"
        size="2xl"
        w="100%"
        textAlign="center"
        pt="2rem"
      >
        {data.text.text}
      </Heading>
      <Heading
        as="h5"
        w="100%"
        fontWeight="300"
        size="lg"
        textAlign="center"
        mt="1rem"
      >
        {data.text2.text2}
      </Heading>
      <Grid
        pt="5rem"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gridAutoRows="auto"
        gap={{ base: "1rem", lg: "1.5rem", xl: "2rem" }}
      >
        {data.cards.map(card => {
          const image = getImage(card.icon.gatsbyImageData)
          return (
            <CardBody key={card.title} position="relative">
              <Box alignSelf="center" p="2rem">
                <GatsbyImage
                  style={{ height: "80px" }}
                  objectFit="contain"
                  image={image}
                  alt="How We Can Help Icon"
                />
              </Box>
              <Heading
                textAlign="center"
                as="h3"
                size="lg"
                fontWeight="400"
                color="bcon.black"
              >
                {card.title}
              </Heading>
              <Text p="1rem .5rem 3rem" color="bcon.gray.primary">
                {card.description.description}
              </Text>
              <BCLink
                fontWeight="300"
                color="bcon.teal.dark"
                to={card.internalLink}
                position="absolute"
                bottom="1.2rem"
                right="1.2rem"
                lineHeight="1.75rem"
              >
                Learn More
                <Box as="span">
                  <Icon as={CgArrowLongRight} w={9} h={6} />
                </Box>
              </BCLink>
            </CardBody>
          )
        })}
      </Grid>
    </ContLimits>
  )
}

export default HowWeCanHelp