import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        left={'4'}
        top={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        borderRadius={'50'}
        onClick={onOpen}
        zIndex={'overlay'}
       
    
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos?catogory=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'} ml={'2'} bottom={'10'}>
              <Button onClick={onClose} colorScheme="purple" mr={'1'}>
                <Link to={'/Login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/Signup'}>SignUp</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
