import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import ContLimits from "../../components/ContLimits"
import CardGrid from "../../components/CardGrid"
import BlogCard from "../../components/Blog/BlogCard"
import { ContentfulBlogPostConnection } from "../../../graphql-types"

type BlogProps = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection
  }
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <ContLimits minH="50vh">
        <CardGrid numOfColumns={3}>
          {data.allContentfulBlogPost.nodes.map(article => {
            if (article.slug == "test-references") return
            return <BlogCard key={article.id} article={article} />
          })}
        </CardGrid>
      </ContLimits>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        id
        slug
        title
        image {
          gatsbyImageData(aspectRatio: 1.777778)
        }
        cardDescription
      }
    }
  }
`

export default Blog
