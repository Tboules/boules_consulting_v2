import { Grid, GridProps } from "@chakra-ui/layout"
import React from "react"

const CardGrid: React.FC<GridProps> = ({ children, ...rest }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gridAutoRows="auto"
      gap={{ base: "1rem", lg: "1.5rem", xl: "2rem" }}
      {...rest}
    >
      {children}
    </Grid>
  )
}

export default CardGrid
