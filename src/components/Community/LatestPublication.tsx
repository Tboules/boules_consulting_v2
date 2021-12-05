import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { ContentfulBlogPostConnection } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import CardGrid from "../CardGrid"
import BlueSecHeader from "./SectionHeaders/BlueSecHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import BlogCard from "../Blog/BlogCard"
import BCLink from "../BCLink"
import { CgArrowLongRight } from "react-icons/cg"
import Icon from "@chakra-ui/icon"

type LatestPublicationProps = {
  data: ContentfulBlogPostConnection
}

const LatestPublication: React.FC<LatestPublicationProps> = ({ data }) => {
  return (
    <ContLimits p="3rem 0">
      <BlueSecHeader title="Latest Publications" />
      <CardGrid numOfColumns={2}>
        {data.nodes.map(article => (
          <BlogCard key={article.id} article={article} />
        ))}
      </CardGrid>
      <Flex p="1rem 0" justifyContent="flex-end" alignItems="center">
        <BCLink
          to="/blog"
          fontSize="1.3rem"
          display="flex"
          color="bcon.teal.primary"
        >
          <Text lineHeight="2.5rem" mr=".5rem">
            View All
          </Text>
          <Icon color="bcon.teal.primary" as={CgArrowLongRight} w={10} h={10} />
        </BCLink>
      </Flex>
    </ContLimits>
  )
}

export default LatestPublication
