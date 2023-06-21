import React from 'react'
import { Container, Box, Text, Tab, Tabs, TabPanels, TabPanel, TabList } from '@chakra-ui/react'
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";



const Homepage = () => {
  return (
    <Container maxW='x1' centerContent>
    <Box
      
      
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        >
      <Text fontSize='4xl' fontFamily='Work Sans' color="black">Chess-Meets</Text>
    </Box>
 <Box 
      
        d="flex"
        justifyContent="center"
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="1g"
        borderWidth="1px"
        color='black'
      >
        <Tabs variant='enclosed'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {<Login/>}
    </TabPanel>
    <TabPanel>
      <Signup/>{" "}
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
  </Container>
    
  )
};


export default Homepage
