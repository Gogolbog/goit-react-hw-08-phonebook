import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserName } from 'selectors';
import { selectToken } from 'selectors';
import image from '../Images/phone-call.png';

const Home = () => {
  const userIsAuth = useSelector(selectToken);
  const userName = useSelector(selectUserName);

  return (
    <>
      {userIsAuth ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          bgSize="cover"
          bgPosition="center"
          py={20}
        >
          <Image margin="0 auto" w={300} src={image} alt="Книга контактів" />
          <Text
            fontSize="2xl"
            color="gray.800"
            textAlign="center"
            my={6}
            fontFamily="Montserrat"
          >
            Hello and welcome {userName} to our phone book application! Our app
            allows you to store all of your important contact information in one
            place, so you can quickly find what you need and stay connected with
            the people that matter most to you. Thanks for choosing our phone
            book app, and we hope you have a great day!
          </Text>
          <Button as={Link} to="/contacts" colorScheme="blue" size="lg">
            Let's go
          </Button>
        </Box>
      ) : (
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgSize="cover"
        >
          <Box
            maxW="md"
            p={8}
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
            textAlign="center"
          >
            <Heading as="h1" size="xl" mb={6} color="gray.800">
              Welcome to our contact manager
            </Heading>
            <Text fontSize="xl" mb={8} color="gray.800">
              This is a simple web application for managing your contacts. To
              use this application, you need to sign up and log in first.
            </Text>
            <Button as={Link} to="/login" colorScheme="blue" mr={4}>
              Log in
            </Button>
            <Button as={Link} to="/register" colorScheme="teal">
              Sign up
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
