import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { ContentfulEmployeeCard } from "../../../../graphql-types"

type TeamCardSafeProps = {
  cardData: ContentfulEmployeeCard
}

const TeamCardSafe = ({ cardData }) => {
  const frontImage = getImage(cardData.employeeImage.gatsbyImageData)
  const [isLargerThan320] = useMediaQuery("(min-width: 320px)")

  return (
    <Flex
      w="100%"
      maxW="25rem"
      direction="column"
      borderRadius="1rem"
      overflow="hidden"
      bg="white"
      p={{ base: ".8rem", md: "1.4rem" }}
      boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
    >
      <Flex h="10rem" direction={{ base: "column", xs: "row" }}>
        <GatsbyImage
          image={frontImage}
          style={{
            height: "10rem",
            width: "100%",
            flex: 1,
          }}
          imgStyle={{ borderRadius: "1rem" }}
          objectFit="contain"
          alt="team member photo"
        />

        <VStack
          p=".5rem"
          flex={{ base: ".5", xs: "1.5" }}
          justifyContent="center"
          spacing="0rem"
        >
          <Heading textAlign="center" size="md">
            {cardData.name}
          </Heading>
          <Text>{cardData.jobTitle}</Text>
        </VStack>
      </Flex>

      <Text mt="1rem" textAlign="left" fontSize=".9rem">
        {cardData.description.description}
      </Text>
    </Flex>
  )
}

export default TeamCardSafe
