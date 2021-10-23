import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { ContentfulTextAndImage } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import { Box } from "@chakra-ui/react"
import SwitchFlex from "../SwitchFlex"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

//@ts-ignore
import logo from "../../assets/logos/Boules-Consulting-Logo.svg"

type BelowHeroProps = {
  data: ContentfulTextAndImage
}

const BelowHero: React.FC<BelowHeroProps> = ({ data }) => {
  const image = getImage(data.image.gatsbyImageData)

  return (
    <ContLimits innerPadding={false}>
      <SwitchFlex p="1rem 0">
        <Box pos="relative" flex="1" overflow="hidden">
          <Text
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "1rem", lg: "1.1rem" }}
            textShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
            w={{ base: "80%", md: "auto" }}
          >
            {data.text.text}
          </Text>
          <Flex
            alignItems="center"
            opacity="0.1"
            transform="translateX(-150px)"
            h="100%"
          >
            <Image src={logo} alt="" height="400px" w="auto" />
          </Flex>
        </Box>
        <Box
          flex="1"
          display={{ base: "none", lg: "block" }}
          alignSelf="center"
        >
          <GatsbyImage image={image} alt="office image" />
        </Box>
      </SwitchFlex>
    </ContLimits>
  )
}

export default BelowHero
