import React from "react"
import { Box, Flex, Grid, Heading, VStack, Text } from "@chakra-ui/layout"
import { ContentfulBanner } from "../../../graphql-types"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ContactButtonCont from "./ContactButtonCont"

type CUBannerProps = {
  data: ContentfulBanner
}

const CUBanner: React.FC<CUBannerProps> = ({ data }) => {
  const image = getImage(data.backgroundImage.gatsbyImageData)

  return (
    <Grid h={{ base: "25rem", md: "35rem" }}>
      <GatsbyImage
        image={image}
        style={{ gridArea: "1/1" }}
        alt="contact us page banner"
      />
      <Flex
        gridArea="1/1"
        pos="relative"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, .55)"
        p="1rem 3rem"
        alignItems="center"
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <Heading
          mt="5%"
          ml={{ base: 0, xl: "15%" }}
          as="h1"
          color="white"
          fontSize={{ base: "3xl", lg: "6xl" }}
        >
          {data.heading}
        </Heading>
        <VStack
          w="22rem"
          pos="absolute"
          bottom="10rem"
          right="12%"
          display={{ base: "none", lg: "flex" }}
        >
          <ContactButtonCont to="mailto:info@boulesconsulting.org">
            <StaticImage src="../../assets/icons/mail.png" alt="mail icon" />
            <Text
              color="bcon.teal.primary"
              fontSize="1.175rem"
              flex="1"
              textAlign="center"
            >
              info@boulesconsulting.org
            </Text>
          </ContactButtonCont>
          <ContactButtonCont to="tel:18185992692">
            <StaticImage src="../../assets/icons/phone.png" alt="mail icon" />
            <Text
              color="bcon.teal.primary"
              fontSize="1.175rem"
              flex="1"
              textAlign="center"
            >
              +1(818) 599-2692
            </Text>
          </ContactButtonCont>
          <ContactButtonCont to="https://www.instagram.com/boules_consulting/?hl=en">
            <StaticImage
              src="../../assets/icons/blue-insta.png"
              alt="mail icon"
            />
            <Text
              color="bcon.teal.primary"
              fontSize="1.175rem"
              flex="1"
              textAlign="center"
            >
              @boules_consulting
            </Text>
          </ContactButtonCont>
        </VStack>
      </Flex>
    </Grid>
  )
}

export default CUBanner
