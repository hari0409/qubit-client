"use client";

import StatContainer from '@/components/minors/StatContainer';
import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react'
import { CategoryScale, Chart, registerables } from 'chart.js';
import React from 'react'
import { Line } from 'react-chartjs-2';

const Network = () => {
  Chart.register(...registerables);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]

  }

  return (
    <>
      <Box m="10px">
        <Heading size="lg">Network Analysis using QIDS</Heading>
      </Box>
      <Container>
        <Center>
          <Heading>Stats of the IDS</Heading>
        </Center>
      </Container>
      <Flex justifyContent="center" gap="20px">
        <StatContainer field="Alarms" value="10" color="#EA1179"/>
        <StatContainer field="Packets Sniffed" value="23234" color="#91C8E4"/>
        <StatContainer field="Database in Use" value="KDD99" color="#AED8CC"/>
      </Flex>
      <Flex justifyContent="space-around" m="30px">
        <Box width="1000px">
          Memory Usage Graph
          <Line data={data} />
        </Box>
        <Box width="1000px">
          Alarm Graph
          <Line data={data} />
        </Box>
      </Flex>
    </>
  )
}

export default Network