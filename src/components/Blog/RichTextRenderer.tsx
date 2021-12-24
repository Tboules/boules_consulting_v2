import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Text,
  Code,
  Link,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Divider,
  Box,
} from "@chakra-ui/layout"
import ContLimits from "../ContLimits"
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RichTextRenderer = ({ raw }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Text as="span" display="inline" fontWeight="bold">
          {text}
        </Text>
      ),
      [MARKS.ITALIC]: text => (
        <Text as="span" display="inline" fontStyle="italic">
          {text}
        </Text>
      ),
      [MARKS.UNDERLINE]: text => (
        <Text as="span" display="inline" textDecoration="underline">
          {text}
        </Text>
      ),
      [MARKS.CODE]: text => <Code>{text}</Code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <Link
            display="inline"
            color="bcon.teal.primary"
            m="1rem 0"
            href={uri}
          >
            {node.content[0].value}
          </Link>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <Box mb="1rem">{children}</Box>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h1" size="2xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h2" size="xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h3" size="lg">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h4" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h5" size="sm">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading fontWeight="500" m="1rem 0" as="h6" size="xs">
          {children}
        </Heading>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.HR]: (node, children) => <Divider m="1.5rem 0 1rem" />,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData } = node.data.target
        return (
          <Box w={{ base: "95%", lg: "80%" }} m="2rem auto">
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              style={{
                boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.2)",
              }}
              alt="embedded blog photo"
            />
          </Box>
        )
      },
    },
  }

  return <Box>{renderRichText(raw, options)}</Box>
}

export default RichTextRenderer
