import { Container, Heading, Input, VStack, Link,Button,Text } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Container size={'container.xl'} h={['50vh','100vh']}>
      <VStack p={16} alignItems={'center'} my={'50%'}>
        <Heading>Welcome Back </Heading>

        <Input
          placeholder={'Email'}
          type={'email'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          required
          focusBorderColor={'purple.500'}
        />

        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/forgetpassword'}>Forget Password?</Link>
        </Button>

        <Button colorScheme={'purple'} type={'submit'} w={'40'} my={'2'}>
          Log In
        </Button>

        <Text textAlign={'right'}>
          New User?{' '}
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;
