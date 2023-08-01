"use client";

import { Box, Text } from '@chakra-ui/react';
import React from 'react'

const StatContainer = ({ field, value, color }) => {
    return (
        <>
            <Box p="20px" bg={color} borderRadius="4px">
                <Text fontSize="lg" fontWeight="semibold">
                    {field}: {value}
                </Text>
            </Box>
        </>
    )
}

export default StatContainer