"use client";
import Data from '@/components/minors/Data';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Ram = () => {
  const [filePath, setFilePath] = useState("");
  const [textData, setTextData] = useState("");
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    const body = {
      filePath
    }
    await axios.post("http://localhost:5000/api/mem/mem", body).then(async (res) => {
      if (res.data.status == "success") {
        setTextData(res.data.msg)
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const getData = async () => {
    const data = await fetch("/home/hari/Downloads/vol_analysis.txt")
    setTextData(data);
    console.log(data);
  }

  return (
    <>
      <Box m="10px">
        <Heading size="lg">Ram Dump Analysis</Heading>
        <form>
          <FormControl id="filePath" isRequired>
            <FormLabel>File Path</FormLabel>
            <Input
              type="text"
              value={filePath}
              onChange={(e) => setFilePath(e.target.value)}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>

      <Container w="3xl" centerContent p={8}>
        <Box boxShadow="md" p={4} rounded="lg" bg="white" width="100%" maxWidth="600px">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Text File Contents
          </Text>
          <Text whiteSpace="pre-wrap">{textData}</Text>
          <Data data={textData} />
        </Box>
      </Container>
    </>
  )
}

export default Ram