import { Box, Flex, Grid } from "@chakra-ui/layout"
import React from "react"
import { ContentfulEmployeeCard } from "../../../../graphql-types"
import * as styles from "./teamCard.module.css"

type TeamCardProps = {
  cardData: ContentfulEmployeeCard
}

const TeamCard = ({ cardData }) => {
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
      >
        <Grid
          pos="absolute"
          w="100%"
          h="100%"
          style={{ backfaceVisibility: "hidden" }}
          bg="blue"
          borderRadius="1rem"
        ></Grid>
        <Box
          pos="absolute"
          w="100%"
          h="100%"
          style={{ backfaceVisibility: "hidden" }}
          bg="bcon.gray.primary"
          transform="rotateY(180deg)"
          borderRadius="1rem"
        ></Box>
      </Box>
    </Box>
  )
}

export default TeamCard
