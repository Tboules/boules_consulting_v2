import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/layout"
import { ContentfulEmployeeCard } from "../../../graphql-types"
import ContLimits from "../ContLimits"
import CardGrid from "../CardGrid"
import TeamCard from "./TeamCard"

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
      <CardGrid pt="5rem">
        {data.map(card => (
          <TeamCard key={card.id} cardData={card} />
        ))}
      </CardGrid>
    </ContLimits>
  )
}

export default OurTeam
