"use client";

import { Box, Button, Center, Flex, FormControl, FormLabel, HStack, Heading, Input, Select, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Obfuscator = () => {
  const [selectedOption, setSelectedOption] = useState('image');
  const [imgVal, setImgVal] = useState("")
  const [textVal, setTextVal] = useState("")
  const [loading, setLoading] = useState(false)
  const [ans, setAns] = useState("")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (selectedOption == "image") {
      const body = {
        imgPath: imgVal,
      }
      await axios.post("http://localhost:5000/api/obfuscator/uploadimg", body).then((res) => {
        console.log(res.data);
        setLoading(false)
        setAns(res.data.path)
      }).catch(err => {
        alert(err)
        setLoading(false)
      })
    }
    else {
      const body = {
        imgPath: imgVal,
        textPath: textVal
      }
      await axios.post("http://localhost:5000/api/obfuscator/uploadtext", body).then((res) => {
        console.log(res.data);
      })
    }
  };
  return (
    <>
      <Box m="10px">
        <Heading size="lg">Obfuscator</Heading>
      </Box>
      <Flex justifyContent="center">
        <HStack>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>File Type</FormLabel>
              <Select
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="image">Image</option>
                <option value="text">Text</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image Input</FormLabel>
              <Input
                type="text"
                placeholder="Enter file path"
                value={imgVal}
                onChange={(e) => { setImgVal(e.target.value) }}
              />
              {
                selectedOption == "text" ? <>
                  <FormLabel>Text Input</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter file path"
                    value={textVal}
                    onChange={(e) => { setTextVal(e.target.value) }}
                  />
                </> : null
              }
            </FormControl>
            {
              loading ? <>
                <Center>
                  <Spinner color='blue' />
                </Center>
              </> :
                ans ? <>
                  <Text>The encrypted data stored in <b>{ans}</b></Text>
                </> : <>
                  <Button colorScheme="blue" type="submit">
                    Submit
                  </Button>
                </>
            }
          </form>
        </HStack>
      </Flex>
    </>
  )
}

export default Obfuscator