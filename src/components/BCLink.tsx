import { Link } from "gatsby"
import React from "react"
import { chakra, LinkProps } from "@chakra-ui/react"

const StylableLink = chakra(Link)

type BCLinkProps = LinkProps & {
  to: string
}

const BCLink: React.FC<BCLinkProps> = props => {
  return <StylableLink {...props} />
}

export default BCLink
