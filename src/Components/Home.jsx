import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img1 from '../Assests/1.jpg';
import img2 from '../Assests/2.jpg';
import img3 from '../Assests/3.jpg';
import img4 from '../Assests/4.jpg';
import img5 from '../Assests/5.png';

const HeadingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  p: '4',
  textTransform: 'uppercase',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          py={2}
          textTransform={'uppercase'}
          w={'fit-content'}
          borderBottom={'2px solid '}
          margin={'auto'}
        >
          Service
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'180%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            asperiores eligendi officiis non! Repellat sapiente debitis labore
            doloribus eveniet quis delectus, saepe harum accusamus recusandae
            deleniti voluptatem nostrum aut fugiat voluptas natus totam sequi
            quia autem at dolore ipsa nemo perferendis beatae. Libero sapiente
            modi rem porro dolorem dicta nam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora maxime unde nulla repellat,
            odit vero inventore alias, perspiciatis deserunt quasi ea commodi
            qui debitis non neque hic? Excepturi ducimus sint dolores corporis
            mollitia, voluptatibus corrupti eius minima reiciendis ab eveniet
            possimus numquam libero quibusdam ad ex, suscipit laudantium itaque
            repudiandae.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <Box w={'full'} h={'100vh'}>
          <Image src={img1} alt="Slide 1" h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...HeadingOption}
          >
            Watch The Future
          </Heading>
        </Box>
      </div>
      <div>
        <Box w={'full'} h={'100vh'}>
          <Image src={img2} alt="Slide 2" h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...HeadingOption}
          >
            Future Is Gaming
          </Heading>
        </Box>
      </div>
      <div>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3} alt="Slide 3" h={'full'} w={'full'} objectFit={'cover'}  />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...HeadingOption}
          >
            Gaming On Console
          </Heading>
        </Box>
      </div>
      <div>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4} alt="Slide 4" h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...HeadingOption}
          >
            Night Life Is Cool
          </Heading>
        </Box>
      </div>
    </Carousel>
  );
};

export default Home;
