"use client";

import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider>
              <Header />
              {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
