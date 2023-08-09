"use client";

import Data from '@/components/minors/Data';
import { Box, Button, Container, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

const procmon = () => {
    
    const [fileContent, setFileContent] = useState("");
    const handleStart = async () => {
        await axios.get("http://localhost:5000/api/sec/atop").then(async (res) => {
            if (res.data.status == "success") {
                setFileContent(res.data.msg);

                console.log(res.data.msg);
            } else {
                console.log(res.data);
            }
        })
    }

    return (
        <>
            <Box m="10px">
                <Heading>Process Monitor</Heading>
            </Box>
            <Flex justifyContent="center">
                <HStack>
                    <Button onClick={handleStart}>Start Process Monitoring</Button>
                </HStack>
            </Flex>
            <Container w="100%" centerContent p={8}>
                <Box boxShadow="md" p={4} rounded="lg" bg="white" width="100%">
                    <Text fontSize="lg" fontWeight="bold" mb={4} w="100%">
                        Text File Contents
                    </Text>
                    <Data data={fileContent}/>
                </Box>
            </Container>
        </>
    )
}

export default procmon