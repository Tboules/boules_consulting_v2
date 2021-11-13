import React, { useEffect } from "react"
import { Box, Flex, Text } from "@chakra-ui/layout"
import ContLimits from "../../components/ContLimits"
import { TabList, Tabs, Tab, TabPanel, TabPanels } from "@chakra-ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import { ContentfulGeneralCard } from "../../../graphql-types"
import * as styles from "./s.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type TabServicesProps = {
  data: ContentfulGeneralCard[]
}

const TabServices: React.FC<TabServicesProps> = ({ data }) => {
  return (
    <ContLimits p="4rem 0 0">
      {/* tab section */}
      <Tabs display={{ base: "none", lg: "block" }} isFitted colorScheme="bcon">
        <TabList>
          {data.map(card => (
            <Tab
              key={card.id}
              fontSize="1.3rem"
              fontWeight="600"
              color="bcon.teal.primary"
              _selected={{
                color: "bcon.teal.dark",
                borderColor: "bcon.teal.dark",
              }}
            >
              {card.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels h="inherit">
          {data.map(card => {
            let image = getImage(card.icon.gatsbyImageData)
            return (
              <TabPanel key={card.id} h="inherit">
                <Flex
                  h="100%"
                  justifyContent="center"
                  alignItems="center"
                  p="1rem 0"
                >
                  <Flex flex="2" justifyContent="center" alignItems="center">
                    <GatsbyImage image={image} alt="services icon" />
                  </Flex>
                  <Box
                    flex="8"
                    className={styles.htmlBox}
                    dangerouslySetInnerHTML={{
                      __html: card.description.childMarkdownRemark.html,
                    }}
                  ></Box>
                </Flex>
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>

      {/* accordion section */}
      <Accordion display={{ base: "block", lg: "none" }} allowToggle>
        {data.map(card => (
          <AccordionItem key={card.id}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {card.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Box
                flex="8"
                className={styles.htmlBox}
                dangerouslySetInnerHTML={{
                  __html: card.description.childMarkdownRemark.html,
                }}
              ></Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </ContLimits>
  )
}

export default TabServices
