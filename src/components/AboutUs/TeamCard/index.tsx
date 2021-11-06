import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { ContentfulEmployeeCard } from "../../../../graphql-types"
import * as styles from "./teamCard.module.css"

type TeamCardProps = {
  cardData: ContentfulEmployeeCard
}

const TeamCard: React.FC<TeamCardProps> = ({ cardData }) => {
  const frontImage = getImage(cardData.employeeImage.gatsbyImageData)

  return (
    <Box
      minH="30rem"
      style={{ perspective: "1000px" }}
      className={styles.outerCard}
    >
      <Box
        w="100%"
        h="100%"
        pos="relative"
        transition="transform 0.8s"
        style={{ transformStyle: "preserve-3d" }}
        className={styles.innerCard}
        borderRadius="1rem"
        boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
      >
        {/* front side */}
        <Grid
          pos="absolute"
          w="100%"
          h="100%"
          style={{ backfaceVisibility: "hidden" }}
          borderRadius="1rem"
          overflow="hidden"
        >
          <GatsbyImage
            image={frontImage}
            alt="Employee Image"
            style={{ gridArea: "1/1", height: "100%" }}
            objectFit="cover"
          />
          <Flex
            gridArea="1/1"
            pos="relative"
            bg="linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 70% , rgba(255,255,255,0.6) 85%, rgba(255,255,255,.9) 100%);"
            alignItems="flex-end"
          >
            <Box color="bcon.gray.dark" pb="2rem" textAlign="center" w="100%">
              <Heading size="md">{cardData.name}</Heading>
              <Text>{cardData.jobTitle}</Text>
            </Box>
          </Flex>
        </Grid>

        {/* back side */}
        <Box
          pos="absolute"
          w="100%"
          h="100%"
          style={{ backfaceVisibility: "hidden" }}
          bg="white"
          transform="rotateY(180deg)"
          borderRadius="1rem"
          color="bcon.gray.dark"
          p="2rem 1rem"
          textAlign="center"
        >
          <Heading>{cardData.name}</Heading>
          <Text mb="2.5rem">{cardData.jobTitle}</Text>
          <Text textAlign="left" fontSize=".9rem">
            {cardData.description.description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default TeamCard
