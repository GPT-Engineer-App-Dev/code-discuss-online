import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.700" color="white" p={4} align="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      <Box p={4}>
        <Heading as="h1" size="xl" mb={6}>Welcome to the Tech Forum</Heading>
        <Text fontSize="lg" mb={6}>Discuss the latest in technology with fellow enthusiasts.</Text>

        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <HStack>
              <FaLaptopCode size="24px" />
              <Heading fontSize="xl">Web Development</Heading>
            </HStack>
            <Text mt={4}>Discuss the latest trends and technologies in web development.</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <HStack>
              <FaMobileAlt size="24px" />
              <Heading fontSize="xl">Mobile Development</Heading>
            </HStack>
            <Text mt={4}>Share insights and ask questions about mobile app development.</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <HStack>
              <FaDatabase size="24px" />
              <Heading fontSize="xl">Databases</Heading>
            </HStack>
            <Text mt={4}>Discuss database design, optimization, and management.</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <HStack>
              <FaCloud size="24px" />
              <Heading fontSize="xl">Cloud Computing</Heading>
            </HStack>
            <Text mt={4}>Explore cloud services, architecture, and best practices.</Text>
          </Box>
        </VStack>
      </Box>

      <Flex as="footer" bg="blue.700" color="white" p={4} mt={10} justify="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;