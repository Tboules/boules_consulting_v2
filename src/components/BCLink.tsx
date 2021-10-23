import { Link } from "gatsby"
import React from "react"
import { chakra, LinkProps } from "@chakra-ui/react"

const StylableLink = chakra(Link)

type BCLinkProps = LinkProps & {
  to: string
}

const BCLink: React.FC<BCLinkProps> = props => {
  return (
    <StylableLink
      _hover={{ textDecoration: "underline", fontWeight: "400" }}
      {...props}
    />
  )
}

export default BCLink
