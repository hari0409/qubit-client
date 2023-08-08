"use client";

import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Obfuscator = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);
    const body = {
      type: selectedOption,
      path: inputValue
    }
    await axios.post("http://localhost:5000/api/obfuscator/upload", body).then((res) => {
      console.log(res.data);
    })
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
              <FormLabel>Dropdown</FormLabel>
              <Select
                placeholder="Select an option"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="image">Image</option>
                <option value="code">Code</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Input Field</FormLabel>
              <Input
                type="text"
                placeholder="Enter file path"
                value={inputValue}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
        </HStack>
      </Flex>
    </>
  )
}

export default Obfuscator