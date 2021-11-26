import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import {
  ContentfulHomePage,
  ContentfulServicesPage,
} from "../../../graphql-types"
import Layout from "../../components/layout"
import Banner from "../../components/Banner"
import Testimonials from "../../components/Testimonials"
import ReachOut from "../../components/ReachOut"
import TabServices from "../../components/Services/TabServices"

type ServicesPageProps = {
  data: {
    contentfulHomePage: ContentfulHomePage
    contentfulServicesPage: ContentfulServicesPage
  }
}

const ServicesPage: React.FC<ServicesPageProps> = ({ data }) => {
  const { contentfulHomePage, contentfulServicesPage } = data

  return (
    <Layout>
      <Banner
        height={{ base: "20rem", md: "25rem" }}
        bannerData={contentfulServicesPage.servicesBanner}
        textLeft={true}
      />
      <TabServices data={contentfulServicesPage.serviceCards} />
      <Testimonials data={contentfulHomePage.testimonialSlides} />
      <ReachOut />
    </Layout>
  )
}

export const query = graphql`
  query ServicesPage {
    contentfulServicesPage {
      servicesBanner {
        heading
        subHeader
        backgroundImage {
          gatsbyImageData
        }
      }
      serviceCards {
        description {
          childMarkdownRemark {
            html
          }
          internal {
            mediaType
          }
        }
        id
        title
        icon {
          gatsbyImageData
        }
      }
    }
    contentfulHomePage {
      testimonialSlides {
        name
        testimony {
          testimony
        }
        jobTitle
        companyName
        image {
          gatsbyImageData(quality: 100)
        }
      }
    }
  }
`

export default ServicesPage
