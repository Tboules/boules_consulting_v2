import { Box, Flex, Grid, Heading, VStack } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useRef } from "react"
import { ContentfulBanner } from "../../../graphql-types"

type BannerProps = {
  bannerData: ContentfulBanner
  height?: {
    base: string
    md: string
  }
  textLeft?: boolean
}

const Banner: React.FC<BannerProps> = ({
  bannerData,
  height = { base: "30rem", md: "43.75rem" },
  textLeft = false,
}) => {
  const image = getImage(bannerData.backgroundImage.gatsbyImageData)

  return (
    <Grid h={height}>
      <GatsbyImage
        image={image}
        style={{ gridArea: "1/1" }}
        alt="home page hero"
      />
      <Box
        gridArea="1/1"
        pos="relative"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, .55)"
        p="1rem 3rem"
      >
        <VStack
          color="white"
          h="100%"
          w="auto"
          textAlign="center"
          alignItems={textLeft ? "flex-start" : "center"}
          justifyContent="center"
          ml={textLeft && { base: "1rem", md: "7rem", lg: "16rem" }}
        >
          <Heading as="h1" fontSize={{ base: "3xl", lg: "6xl" }}>
            {bannerData.heading}
          </Heading>
          <Heading
            as="h4"
            fontWeight="400"
            fontSize={{ base: "xl", lg: "3xl" }}
            color="white"
          >
            {bannerData?.subHeader}
          </Heading>
        </VStack>
      </Box>
    </Grid>
  )
}

export default Banner
