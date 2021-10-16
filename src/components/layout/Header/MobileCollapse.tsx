import taxonomy, { NavigationType } from "../../../utils/taxonomy"
import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, VStack } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/react"
import React from "react"
import BCLink from "../../../components/BCLink"
import useToggle from "../../../hooks/useToggle"

const MobileCollapse = () => {
  const [openMobileNav, toggleMobileNav] = useToggle(false)

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <IconButton
        aria-label="open mobile nav"
        icon={<HamburgerIcon w={6} h={6} color="bcon.teal.primary" />}
        bg="transparent"
        onClick={toggleMobileNav}
      />
      <Collapse in={openMobileNav}>
        <VStack
          pos="fixed"
          top="102px"
          bottom="0"
          left="0"
          right="0"
          bgColor="bcon.teal.primary"
          color="white"
          zIndex="100"
          alignItems="flex-start"
          p="1rem"
        >
          {taxonomy.NAVIGATION.map((link: NavigationType) => {
            return (
              <BCLink
                fontSize="1.2rem"
                borderBottom="1px solid white"
                width="100%"
                key={link.slug}
                to={link.uri}
                p="1rem"
                _hover={{ textDecoration: "underline" }}
              >
                {link.title}
              </BCLink>
            )
          })}
        </VStack>
      </Collapse>
    </Box>
  )
}

export default MobileCollapse
