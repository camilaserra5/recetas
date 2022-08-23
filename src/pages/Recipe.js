import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";
import hamburg from '../assets/hamburguesa.jpeg';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem, Icon,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ImSpoonKnife } from 'react-icons/im'
import { BsClockHistory } from 'react-icons/bs'
import Feature from "../components/ui/Feature";


export default function Landing() {
    return (
        <LandingLayout>
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    pb={{ base: 18, md: 24 }}>
                <Flex>
                        <Image
                            rounded={'md'}
                            src={hamburg}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                Hamburguesita
                            </Heading>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore
                                </Text>
                                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                                    <Feature
                                        icon={<Icon as={ImSpoonKnife} w={10} h={10} />}
                                        title={'Porciones'}
                                        text={
                                            '4 personas'
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Prep time'}
                                        text={
                                            '60 min'
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Cook time'}
                                        text={
                                            '30 min'
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Total time'}
                                        text={
                                            '30 min'
                                        }
                                    />
                                </SimpleGrid>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Ingredientes
                                </Text>
                                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                                    <List spacing={2}>
                                        <ListItem>Chronograph</ListItem>
                                        <ListItem>Master Chronometer Certified</ListItem>
                                        <ListItem>Tachymeter</ListItem>
                                        <ListItem>Tachymeter</ListItem>
                                        <ListItem>Tachymeter</ListItem>
                                    </List>
                                </SimpleGrid>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Instrucciones
                                </Text>
                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>1:</Text>{' '}
                                        ahjsdkjhasjhdgajs dkjahskdjhas{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>2:</Text>{' '}
                                        ahjsdkjhasjhdgajs asd dasjddas daskdj dashkdj{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>3:</Text>{' '}
                                        ahjsdkjhasjhdgajs dkjahskdjhas{' '}
                                    </ListItem>
                                </List>

                            </Box>
                        </Stack>
                        </Stack>
                </SimpleGrid>
            </Container>
        </LandingLayout>
    );
}
