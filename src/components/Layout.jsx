import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Header } from './Header';
import { Box, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        padding: '0 16px',
        minHeight: '100vh',
        maxWidth: 1200,
      }}
    >
      <Header />
      <Suspense fallback={null} style={{ flex: 1 }}>
        <Outlet />
      </Suspense>
      <Box
        as="footer"
        bgGradient="linear(to-r, #fffb00,#13df1d)"
        p={4}
        borderRadius="20px 20px 0 0"
        style={{
          marginTop: 'auto',
          width: '100%',
        }}
      >
        <Text fontSize="lg" color="purple.500" textAlign="center">
          Your contacts is very important for us
        </Text>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
