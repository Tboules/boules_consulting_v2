exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve(`src/templates/BlogPost.tsx`)
  const blogPostQuery = await graphql(`
    query BlogPosts {
      allContentfulBlogPost {
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
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  blogPostQuery.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: BlogTemplate,
      context: {
        ...node,
      },
    })
  })
}
