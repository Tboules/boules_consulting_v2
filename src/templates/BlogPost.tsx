import React from "react"
import { Flex, Text } from "@chakra-ui/layout"

type BlogProps = {
  pageContext: any
}

const BlogPost: React.FC<BlogProps> = ({ pageContext }) => {
  console.log(pageContext)

  return (
    <Flex>
      <Text>hello blog</Text>
    </Flex>
  )
}

export default BlogPost
