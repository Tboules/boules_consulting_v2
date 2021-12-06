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
import CommunityBillboard from "../../components/Community/CommunityBillboard"
import ReachOut from "../../components/ReachOut"

type CommunityProps = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection
    contentfulCommunityPage: ContentfulCommunityPage
  }
}

const Community: React.FC<CommunityProps> = ({ data }) => {
  const { allContentfulBlogPost, contentfulCommunityPage } = data

  return (
    <Layout>
      <Banner
        height={{ base: "20rem", md: "25rem" }}
        bannerData={contentfulCommunityPage.communityBanner}
      />
      <LatestPublication data={allContentfulBlogPost} />
      <InTheNews data={contentfulCommunityPage.newsCards} />
      <CommunityBillboard data={contentfulCommunityPage.communityCards} />
      <ReachOut />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost(limit: 2, sort: { fields: createdAt, order: DESC }) {
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
          gatsbyImageData(width: 150)
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
