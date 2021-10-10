import { Flex, Grid, Heading } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { ContentfulBanner } from "../../../graphql-types"

type BannerProps = {
  bannerData: ContentfulBanner
}

const Banner: React.FC<BannerProps> = ({ bannerData }) => {
  console.log(bannerData)
  const image = getImage(bannerData.backgroundImage.gatsbyImageData)
  return (
    <Grid h={{ base: "30rem", md: "43.75rem" }}>
      <GatsbyImage
        image={image}
        style={{ gridArea: "1/1", background: "rgba(0, 0, 0, .55)" }}
        alt="home page hero"
      />
    </Grid>
  )
}

export default Banner
