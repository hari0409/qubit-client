"use client";

import { DragDrop } from '@/components/DragDrop';
import { Box, Flex, HStack, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Obfuscator = () => {
  return (
    <>
      <Box m="10px">
        <Heading size="lg">Obfuscator</Heading>
      </Box>
      <Flex justifyContent="center">
        <HStack>
          <DragDrop />
        </HStack>
      </Flex>
    </>
  )
}

export default Obfuscator