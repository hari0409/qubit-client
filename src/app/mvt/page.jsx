"use client";

import { Button, Center, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Mvt = () => {
  const [loading, setLoading] = useState(false);
  const [setsuccess, setSetsuccess] = useState(false);

  const handleMVT = async () => {
    try {
      setLoading(true)
      await axios.get("http://localhost:5000/api/mvt/mvt").then((res) => {
        console.log(res.data);
        setLoading(false)
        alert("MVT analysis performed & report stored at Downloads")
        setSetsuccess(true)
        Setclicked(true)
      })
    } catch (error) {
      setLoading(false)
      alert("Error while performing MVT")
    }
  }

  return (
    <>
      <Center>
        {
          loading ? <>
            <Spinner color='blue' />
            <Text>This will take several minutes based on phone & its storage used</Text>
          </> : <>
            <Button onClick={handleMVT}>Perform MVT</Button>
          </>
        }
      </Center>
    </>
  )
}

export default Mvt  