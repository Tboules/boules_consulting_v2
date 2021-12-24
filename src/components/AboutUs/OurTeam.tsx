import React from "react"
import { Heading } from "@chakra-ui/layout"
import { ContentfulEmployeeCard } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import CardGrid from "../CardGrid"
// import TeamCard from "./TeamCard"
import TeamCardSafe from "./TeamCard/TeamCardSafe"

type OurTeamProps = {
  data: ContentfulEmployeeCard[]
}

const OurTeam: React.FC<OurTeamProps> = ({ data }) => {
  console.log(data)
  return (
    <ContLimits bg="bcon.teal.primary" p="3rem 0">
      <Heading size="2xl" color="white" w="100%" textAlign="center">
        Our Team
      </Heading>
      <CardGrid numOfColumns={3} pt="5rem">
        {data.map(card => (
          <TeamCardSafe key={card.id} cardData={card} />
        ))}
      </CardGrid>
    </ContLimits>
  )
}

export default OurTeam
