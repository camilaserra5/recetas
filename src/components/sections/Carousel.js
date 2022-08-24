import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import BlogTags from "./BlogTags";
import {Link} from "react-router-dom";

import { NavLink as RouterLink } from "react-router-dom";

const cards = require('../../data/recipes.json');

// Settings for the slider
const settings = {
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  center: true,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}
      marginTop="-62px"
    >
      {/* CSS files for react-slick */}

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height= 'auto'
            position="relative"
          >
            <Container size="container.lg" key={index}
                       height= 'auto'
                       position="absolute"
                       minWidth="100%"
                       backgroundPosition="center"
                       backgroundRepeat="no-repeat"
                       backgroundSize="cover"
                       backgroundImage={card.image}
                       filter='auto' blur='2px' top="0" left="0" right="0" bottom="0">
            </Container>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >

                <Box boxShadow='dark-lg' p='2' rounded='md' bg="rgba(204, 204, 204, 0.6)" align='center' justify='center'>
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="#08333E" >
                    {card.name}
                  </Heading>
                  <Text textDecoration="underline"   fontSize={{ base: 'md', lg: 'lg' }} color="#08333E">
                    <Link to={card.uri} state={{ recipe: card }}>
                      ver más
                    </Link>
                  </Text>
                </Box>

              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
