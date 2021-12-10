import React from "react"
import { Text } from "@chakra-ui/react"

const FormErrorMsg = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <Text mt=".2rem" color="red.700" fontSize=".8rem" fontWeight="bold">
          {errorMessage}
        </Text>
      )}
    </>
  )
}

export default FormErrorMsg
