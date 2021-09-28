import React from "react"
import BCLink from "./BCLink"

const BCButtonLink = ({ children, ...rest }) => {
  return (
    <BCLink
      p="1rem 3rem"
      borderRadius="2.5rem"
      bg="bc.teal.primary"
      color="white"
      {...rest}
    >
      {children}
    </BCLink>
  )
}

export default BCButtonLink
