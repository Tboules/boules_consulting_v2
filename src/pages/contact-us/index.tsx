import React from "react"
import { Flex, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"

import { ContentfulContactPage } from "../../../graphql-types"
import Layout from "../../components/layout"
import CUBanner from "../../components/ContactUs/CUBanner"
import CUFormArea from "../../components/ContactUs/CUFormArea"

type ContactUsProps = {
  data: {
    contentfulContactPage: ContentfulContactPage
  }
}

const ContactUs: React.FC<ContactUsProps> = ({ data }) => {
  return (
    <Layout>
      <CUBanner data={data.contentfulContactPage.contactBanner} />
      <CUFormArea />
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
