"use client";

import { Box, Button, ButtonGroup, Center, Container, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import NavButton from './minors/NavButton';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <Box bg="#ffffff" p="10px" alignItems="center">
        <Center className='prevent-select'>
          <Image src="/logo.png" width={100} height={100} alt='logo' />
          <Heading size="2xl">Qubit</Heading>
        </Center>
        <Flex justifyContent="center">
          <ButtonGroup gap='3' m="3">
            <NavButton href="obfuscator" feature="Obfuscator" />
            <NavButton href="network" feature="Network Analysis" />
            <NavButton href="ram" feature="RAM Dump Analysis" />
            <NavButton href="mvt" feature="MVT Analysis" />
            <NavButton href="procmon" feature="Process Monitor" />
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  )
}

export default Header