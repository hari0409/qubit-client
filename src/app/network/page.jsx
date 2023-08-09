"use client";

import StatContainer from '@/components/minors/StatContainer';
import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react'
import axios from 'axios';
import { CategoryScale, Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

const Network = () => {
  Chart.register(...registerables);

  const [alarms, setAlarms] = useState(0);
  const [lines, setLines] = useState(0)

  const getInfo = async () => {
    await axios.get("http://localhost:5000/api/sec/alarms").then((res) => {
      console.log(res);
      if (res.data.status == "success") {
        console.log(res.data);
        setAlarms(res.data.data.fileCount);
        setLines(res.data.data.rowCount)
      }
    }).catch((err) => {
      console.log(err.message);
    })
  }

  useEffect(async () => {
    await getInfo()
  }, [])


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
        <StatContainer field="Alarms" value={alarms} color="#EA1179" />
        <StatContainer field="Packets Sniffed" value={lines} color="#91C8E4" />
        <StatContainer field="Database in Use" value="KDD99" color="#AED8CC" />
      </Flex>
      {/* <Flex justifyContent="space-around" m="30px">
        <Box width="1000px">
          Memory Usage Graph
          <Line data={data} />
        </Box>
        <Box width="1000px">
          Alarm Graph
          <Line data={data} />
        </Box>
      </Flex> */}
    </>
  )
}

export default Network