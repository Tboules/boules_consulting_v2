import * as React from "react"
import { graphql } from "gatsby"
import { ContentfulHomePage } from "../../graphql-types"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import BelowHero from "../components/Home/BelowHero"
import Promotion from "../components/Home/Promotion"
import HowWeCanHelp from "../components/Home/HowWeCanHelp"
import Testimonials from "../components/Testimonials"
import OurHappyCustomers from "../components/OurHappyCustomers"
import ReachOut from "../components/ReachOut"

type HomePageProps = {
  data: {
    contentfulHomePage: ContentfulHomePage
  }
}

const IndexPage: React.FC<HomePageProps> = ({ data }) => {
  const { contentfulHomePage } = data

  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <Banner bannerData={contentfulHomePage.homeBanner} />
      <BelowHero data={contentfulHomePage.belowHero} />
      <Promotion />
      <HowWeCanHelp data={contentfulHomePage.howWeHelpStack} />
      <Testimonials data={contentfulHomePage.testimonialSlides} />
      <OurHappyCustomers data={contentfulHomePage.carouselImages} />
      <ReachOut />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHomePage {
      slug
      homeBanner {
        heading
        subHeader
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      belowHero {
        image {
          gatsbyImageData
        }
        text {
          text
        }
      }
      ctaStack {
        text {
          text
        }
        text2 {
          text2
        }
      }
      howWeHelpStack {
        text {
          text
        }
        text2 {
          text2
        }
        cards {
          icon {
            gatsbyImageData
          }
          title
          description {
            description
          }
          internalLink
        }
      }
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
      carouselImages {
        images {
          gatsbyImageData
        }
      }
    }
  }
`

export default IndexPage
