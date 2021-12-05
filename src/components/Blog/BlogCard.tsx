import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { ContentfulBlogPost } from "../../../graphql-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BCLink from "../BCLink"

type BlogCardProps = {
  article: ContentfulBlogPost
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const image = getImage(article.image.gatsbyImageData)
  return (
    <Flex
      key={article.id}
      flexDir="column"
      boxShadow="1px 2px 3px rgba(0, 0, 0, 0.2)"
      overflow="hidden"
      borderRadius="1rem"
    >
      <GatsbyImage
        style={{ overflow: "hidden" }}
        image={image}
        alt="latest publication thumbnail"
      />
      <Box p="1rem" bg="white">
        <Heading as="h3" size="lg">
          {article.title}
        </Heading>
        <Text p="1rem 0 1.2rem">{article.cardDescription}...</Text>
        <BCLink color="bcon.teal.primary" to={`/blog/${article.slug}`}>
          Read more
        </BCLink>
      </Box>
    </Flex>
  )
}

export default BlogCard
