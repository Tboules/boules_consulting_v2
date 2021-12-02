import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { ContentfulContactPage } from "../../../graphql-types"
import CUBanner from "../../components/ContactUs/CUBanner"

type ContactUsProps = {
  data: {
    contentfulContactPage: ContentfulContactPage
  }
}

const ContactUs: React.FC<ContactUsProps> = ({ data }) => {
  return (
    <Layout>
      <CUBanner data={data.contentfulContactPage.contactBanner} />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulContactPage {
      contactBanner {
        heading
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  }
`

export default ContactUs
