import { Container, Heading, Input, VStack, Link,Button,Text,Avatar } from '@chakra-ui/react';
import React from 'react';

const SignUp = () => {
  return (
    <Container size={'container.xl'} h={'100vh'} >
      <VStack p={16} alignItems={'center'} my={'20%'} spacing={'5'}>
        <Heading>VideoHub</Heading>

        <Avatar alignSelf={'center'} boxSize={'32'} />

        <Input
          placeholder={'Name'}
          type={'text'}
          required
          focusBorderColor={'purple.500'}
        />
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
        <Input
          placeholder={'Confirm Password'}
          type={'password'}
          required
          focusBorderColor={'purple.500'}
        />


        <Button colorScheme={'purple'} type={'submit'} w={'40'} my={'2'}>
        SignUp
        </Button>

        <Text textAlign={'right'}>
          Already User?{' '}
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/signup'}>Log In</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default SignUp;
