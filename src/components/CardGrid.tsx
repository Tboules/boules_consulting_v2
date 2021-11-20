import { Grid, GridProps } from "@chakra-ui/layout"
import React from "react"

type CardProps = GridProps & {
  numOfColumns: number
}

const CardGrid: React.FC<CardProps> = ({
  children,
  numOfColumns = 4,
  ...rest
}) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        xl: `repeat(${numOfColumns}, 1fr)`,
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
