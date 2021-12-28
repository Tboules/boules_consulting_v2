const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = "https://boulesconsulting.org/"

module.exports = {
  siteMetadata: {
    title: `Boules Consulting`,
    description: ``,
    author: `Anthony Boules`,
    siteUrl: `https://boulesconsulting.org/`,
  },
  plugins: [
    // `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2106592652838518",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-135218299-1", "AW-10832162944"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allContentfulEntry {
            nodes {
              ... on ContentfulHomePage {
                updatedAt
                slug
              }
              ... on ContentfulAboutUsPage {
                slug
                updatedAt
              }
              ... on ContentfulContactPage {
                slug
                updatedAt
              }
              ... on ContentfulCommunityPage {
                slug
                updatedAt
              }
              ... on ContentfulServicesPage {
                slug
                updatedAt
              }
              ... on ContentfulBlogPost {
                slug
                updatedAt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulEntry: { nodes: allNodes },
        }) => {
          const contNodeMap = allNodes.reduce((acc, node) => {
            const { slug } = node
            if (!slug) return acc

            acc[slug] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...contNodeMap[page.path] }
          })
        },
        serialize: ({ path, updatedAt }) => {
          return {
            url: path,
            lastmod: updatedAt,
          }
        },
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Boules-Consulting-Logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
