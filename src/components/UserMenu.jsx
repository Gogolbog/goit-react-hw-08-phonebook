import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { selectUserName } from 'selectors';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Flex alignItems="center">
      <Box marginLeft="1rem">
        <Text fontSize="lg" fontWeight="bold" color="purple.500">
          {name}
        </Text>
      </Box>
      <Button
        as={Link}
        to="/"
        marginLeft="0.5rem"
        variant="outline"
        borderColor="purple.500"
        color="purple.500"
        _hover={{ bgColor: 'purple.500', color: 'white' }}
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </Flex>
  );
}
