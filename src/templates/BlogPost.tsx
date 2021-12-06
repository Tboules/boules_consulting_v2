import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/layout"
import Layout from "../components/layout"
import ContLimits from "../components/ContLimits"
import RichTextRenderer from "../components/Blog/RichTextRenderer"
import { ContentfulBlogPost } from "../../graphql-types"

type BlogProps = {
  pageContext: ContentfulBlogPost
}

const BlogPost: React.FC<BlogProps> = ({ pageContext }) => {
  return (
    <Layout>
      <ContLimits maxW="75rem" m="auto">
        <Heading as="h1" fontWeight="500" mb="2rem" size="4xl">
          {pageContext.title}
        </Heading>
        <RichTextRenderer raw={pageContext.articleBody} />
      </ContLimits>
    </Layout>
  )
}

export default BlogPost
