"use client";

import { Box, Text } from '@chakra-ui/react';
import { Chance } from 'chance';
import React from 'react'

const Data = ({ data }) => {
    const chance = new Chance();
    const lines = data.split("\n");

    const coloredLines = lines.map((line, index) => {
        const randomColor = chance.color();
        return (
            <Text key={index} color={randomColor} marginBottom="0.5rem">
                {line}
            </Text>
        );
    });

    return <Box>{coloredLines}</Box>;
}

export default Data