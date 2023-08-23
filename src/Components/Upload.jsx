import React from 'react';
import { Container, HStack, VStack, Button, Input } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container w={'full'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <HStack>
          <form>
            <HStack>
              <Input
                required
                type={'file'}
                css={{
                  '&::file-selector-button': {
                    border: 'none',
                    width: 'calc(100% + 36px)',
                    height: '100%',
                    marginLeft: '-18px',
                    color: 'purple',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  },
                }}
              />
              <Button colorScheme={'purple'} type={'submit'}>
                Upload
              </Button>
            </HStack>
          </form>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Upload;
