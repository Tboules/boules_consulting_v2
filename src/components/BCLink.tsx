import { Link } from "gatsby"
import React from "react"
import { chakra } from "@chakra-ui/react"

const StylableLink = chakra(Link)

const BCLink = props => {
  return <StylableLink {...props} />
}

export default BCLink
