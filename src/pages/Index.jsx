import { Container, Text, VStack, Box, Heading, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="purple.50">
      <VStack spacing={8} textAlign="center">
        <Box>
          <Image src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTc2MDE4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ekinox.io Logo" boxSize="150px" />
        </Box>
        <Heading as="h1" size="2xl" color="purple.700">
          Welcome to Ekinox.io
        </Heading>
        <Text fontSize="lg" color="purple.600">
          Innovating the future, one step at a time.
        </Text>
        <Button colorScheme="purple" size="lg">
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="purple" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="purple" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="purple" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="purple" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
