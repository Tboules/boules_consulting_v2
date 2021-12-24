import taxonomy, { NavigationType } from "../../../utils/taxonomy"
import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import BCLink from "../../../components/BCLink"
import useToggle from "../../../hooks/useToggle"
import { StaticImage } from "gatsby-plugin-image"

const MobileCollapse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <IconButton
        aria-label="open mobile nav"
        icon={<HamburgerIcon w={6} h={6} color="bcon.teal.primary" />}
        bg="transparent"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isFullHeight={false}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="bcon.teal.primary">
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <HStack spacing={{ base: 3, lg: 5 }}>
              <StaticImage
                src="../../../assets/logos/Boules-Consulting-Logo-White.svg"
                style={{ width: "4.375rem", height: "4.375rem" }}
                alt="Boules Consulting Logo"
              />
              <Heading
                color="white"
                fontSize={{ base: "1.375rem", lg: "1.825rem", xl: "2.275rem" }}
                maxW={{ base: "60%", lg: "100%" }}
              >
                Boules
                <br /> Consulting
              </Heading>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack color="white" alignItems="flex-start" p="1rem">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default MobileCollapse
