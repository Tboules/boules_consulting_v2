import taxonomy from "../../../utils/taxonomy"
import { Flex, VStack } from "@chakra-ui/layout"
import React from "react"
import BCLink from "../../../components/BCLink"

const FooterNav = () => {
  const firstHalf = taxonomy.NAVIGATION.slice(0, 3)
  const secondHalf = taxonomy.NAVIGATION.slice(3)

  return (
    <Flex flex="1" direction={{ base: "column", lg: "row" }}>
      <VStack p={{ base: "0", lg: "1rem 1.5rem" }}>
        {taxonomy.NAVIGATION.map(link => {
          return (
            <BCLink
              _hover={{ textDecoration: "underline" }}
              key={link.slug}
              to={link.uri}
            >
              {link.title}
            </BCLink>
          )
        })}
      </VStack>
    </Flex>
  )
}

export default FooterNav
