import { Flex, LinkProps } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/react"
import React from "react"

type ContactButtonContProps = LinkProps & {
  to: string
}

const ContactButtonCont: React.FC<ContactButtonContProps> = ({
  children,
  to,
  ...rest
}) => {
  return (
    <chakra.a
      w="100%"
      href={to}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="1rem"
      backgroundColor="rgba(255, 255, 255, 0.90)"
      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
      p="1.2rem 1rem"
      {...rest}
    >
      {children}
    </chakra.a>
  )
}

export default ContactButtonCont
