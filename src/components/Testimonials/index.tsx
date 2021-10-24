import React from "react"
import { Box, Flex, Text, VStack } from "@chakra-ui/layout"
import ContLimits from "../ContLimits"
import { ContentfulTestimonialSlide } from "../../../graphql-types"
import { Heading, IconButton, Icon } from "@chakra-ui/react"
import SwitchFlex from "../SwitchFlex"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"
import useCustomEmbla from "../../hooks/useCustomEmbla"

type TestimonialsProps = {
  data: ContentfulTestimonialSlide[]
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const { refs, next, previous } = useCustomEmbla({
    loop: true,
    skipSnaps: false,
  })
  return (
    <ContLimits p="3rem 0 2rem" maxW="1200px" margin="auto" position="relative">
      <Heading textAlign="center" fontWeight="600" color="bcon.teal.primary">
        What Our Clients Had To Say:
      </Heading>

      <Box overflow="hidden" ref={refs.firstRef}>
        <Flex>
          {data.map((slide, i) => {
            const image = getImage(slide.image.gatsbyImageData)
            return (
              <VStack key={i} flex="0 0 100%" position="relative">
                <SwitchFlex p="1rem 0">
                  <GatsbyImage
                    style={{ maxHeight: "300px" }}
                    objectFit="contain"
                    image={image}
                    alt="testimonial image"
                  />

                  <Box
                    flex="2"
                    alignSelf="center"
                    textShadow="0px 1px 2px rgba(0, 0, 0, 0.1)"
                    dangerouslySetInnerHTML={{
                      __html: slide.testimony.testimony,
                    }}
                  ></Box>
                </SwitchFlex>
                <Flex
                  w={{ base: "100%", lg: "80%" }}
                  margin="auto"
                  alignItems="center"
                >
                  <VStack flex="1">
                    <Heading
                      fontWeight="600"
                      color="bcon.teal.primary"
                      as="h4"
                      size="lg"
                    >
                      {slide.name}
                    </Heading>
                    <Heading
                      textAlign="center"
                      fontWeight="400"
                      as="h6"
                      size="sm"
                    >
                      {slide.jobTitle}
                    </Heading>
                  </VStack>
                </Flex>
              </VStack>
            )
          })}
        </Flex>
      </Box>

      {/* Carousel Buttons */}
      <IconButton
        onClick={previous}
        bg="transparent"
        p="1rem .5rem"
        icon={
          <Icon color="bcon.teal.primary" as={CgArrowLongLeft} w={10} h={10} />
        }
        aria-label="carousel previous button"
        position="absolute"
        bottom="4rem"
        left={{ base: "5%", lg: "15%" }}
      />
      <IconButton
        onClick={next}
        bg="transparent"
        p="1rem .5rem"
        icon={
          <Icon color="bcon.teal.primary" as={CgArrowLongRight} w={10} h={10} />
        }
        aria-label="carousel previous button"
        position="absolute"
        bottom="4rem"
        right={{ base: "5%", lg: "15%" }}
      />
    </ContLimits>
  )
}

export default Testimonials
