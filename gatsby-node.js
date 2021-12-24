const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve(`src/templates/BlogPost.tsx`)
  const blogPostQuery = await graphql(`
    query BlogPosts {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          slug
          title
          image {
            gatsbyImageData(aspectRatio: 1.777778)
          }
          cardDescription
          articleBody {
            raw
            references {
              ... on ContentfulAsset {
                gatsbyImageData
                __typename
                contentful_id
              }
            }
          }
        }
      }
    }
  `)

  blogPostQuery.data.allContentfulBlogPost.nodes.forEach(node => {
    if (node.slug != "test-references") {
      createPage({
        path: node.slug,
        component: BlogTemplate,
        context: {
          ...node,
        },
      })
    }
  })
}
