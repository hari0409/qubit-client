"use client";
import { Button, Link } from '@chakra-ui/react'
import React from 'react'

const NavButton = ({ href, feature }) => {
    return (
        <Link href={`/${href}`} style={{ textDecoration: "none" }} >
            <Button colorScheme='green'>
                {feature}
            </Button>
        </Link>
    )
}

export default NavButton