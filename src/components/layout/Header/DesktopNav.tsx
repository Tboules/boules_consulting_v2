import { List, ListItem } from "@chakra-ui/layout"
import React from "react"
import taxonomy, { NavigationType } from "../../../utils/taxonomy"
import BCButtonLink from "../../../components/BCButtonLink"
import BCLink from "../../../components/BCLink"
import { chakra } from "@chakra-ui/react"

const DesktopNav = () => {
  return (
    <chakra.nav display={{ base: "none", lg: "block" }}>
      <List display={{ base: "none", lg: "flex" }}>
        {taxonomy.NAVIGATION.map((link: NavigationType) => {
          if (link.show === "button") {
            return (
              <ListItem key={link.slug}>
                <BCButtonLink fontSize="1.2rem" to={link.uri}>
                  {link.title}
                </BCButtonLink>
              </ListItem>
            )
          }
          if (link.show) {
            return (
              <ListItem mr={10} key={link.slug}>
                <BCLink
                  fontWeight="300"
                  fontSize="1.2rem"
                  to={link.uri}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  {link.title}
                </BCLink>
              </ListItem>
            )
          }
        })}
      </List>
    </chakra.nav>
  )
}

export default DesktopNav
