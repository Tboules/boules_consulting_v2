import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { ContentfulAboutUsPage } from "../../../graphql-types"
import Banner from "../../components/Banner"
import WhatWeDo from "../../components/AboutUs/WhatWeDo"
import OurTeam from "../../components/AboutUs/OurTeam"

type AboutUsProps = {
  data: {
    contentfulAboutUsPage: ContentfulAboutUsPage
  }
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  const { contentfulAboutUsPage } = data

  return (
    <Layout>
      <Banner bannerData={contentfulAboutUsPage.aboutUsBanner} />
      <WhatWeDo data={contentfulAboutUsPage.whatWeDo} />
      <OurTeam data={contentfulAboutUsPage.ourTeam} />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulAboutUsPage {
      slug
      aboutUsBanner {
        heading
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      whatWeDo {
        title
        image {
          gatsbyImageData
        }
        text {
          text
        }
      }
      ourTeam {
        id
        cardSize
        employeeImage {
          gatsbyImageData
        }
        name
        jobTitle
        description {
          description
        }
      }
      carouselImages {
        images {
          gatsbyImageData
        }
      }
    }
  }
`

export default AboutUs
