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
} from "@chakra-ui/layout"
import ContLimits from "../ContLimits"
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RichTextRenderer = ({ raw }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Text fontWeight="bold">{text}</Text>,
      [MARKS.ITALIC]: text => <Text fontStyle="italic">{text}</Text>,
      [MARKS.UNDERLINE]: text => <Text textDecoration="underline">{text}</Text>,
      [MARKS.CODE]: text => <Code>{text}</Code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return <Link href={uri}>{children}</Link>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1" size="3xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" size="2xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" size="xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" size="lg">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as="h5" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading as="h6" size="sm">
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
      [BLOCKS.HR]: (node, children) => <Divider />,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData } = node.data.target
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt="embedded blog photo"
          />
        )
      },
    },
  }

  return <ContLimits>{renderRichText(raw, options)}</ContLimits>
}

export default RichTextRenderer
