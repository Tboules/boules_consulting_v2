import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import {
  ContentfulBlogPostConnection,
  ContentfulCommunityPage,
} from "../../../graphql-types"
import Layout from "../../components/layout"
import Banner from "../../components/Banner"
import LatestPublication from "../../components/Community/LatestPublication"
import InTheNews from "../../components/Community/InTheNews"

type CommunityProps = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection
    contentfulCommunityPage: ContentfulCommunityPage
  }
}

const Community: React.FC<CommunityProps> = ({ data }) => {
  console.log(data)
  const { allContentfulBlogPost, contentfulCommunityPage } = data

  return (
    <Layout>
      <Banner bannerData={contentfulCommunityPage.communityBanner} />
      <LatestPublication data={allContentfulBlogPost} />
      <InTheNews data={contentfulCommunityPage.newsCards} />
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
    contentfulCommunityPage {
      communityBanner {
        subHeader
        heading
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      newsCards {
        image {
          gatsbyImageData(aspectRatio: 1.777778)
        }
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        button {
          buttonText
          buttonLink
        }
      }
      communityCards {
        title
        image {
          gatsbyImageData
        }
        text {
          childMarkdownRemark {
            html
          }
        }
        button {
          buttonLink
          buttonText
        }
      }
    }
  }
`

export default Community
