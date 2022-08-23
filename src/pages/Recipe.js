import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";
import hamburg from '../assets/hamburguesa.jpeg';
import {
    Box, Container, Stack, Text, Image, Flex, VStack, Heading, SimpleGrid, StackDivider, useColorModeValue, List,
    ListItem, Icon, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,NumberDecrementStepper
} from '@chakra-ui/react';
import { ImSpoonKnife } from 'react-icons/im'
import { BsClockHistory } from 'react-icons/bs'
import Feature from "../components/ui/Feature";


export default function Landing(props) {
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
                            src={props.image}
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
                                {props.name}
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
                                            <NumberInput size='sm' maxW={20} defaultValue={props.servings} min={1}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Prep time'}
                                        text={props.prepTime + ' min'}
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Cook time'}
                                        text={props.cookTime + ' min'}
                                    />
                                    <Feature
                                        icon={<Icon as={BsClockHistory} w={10} h={10} />}
                                        title={'Total time'}
                                        text={props.totalTime + ' min'}
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
                                        {
                                            props.ingredients.map(item => {
                                                return (
                                                    <ListItem>{item.name}</ListItem>
                                                )
                                            })
                                        }
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
                                    {
                                        props.directions.map(item => {
                                            return (
                                                <ListItem>
                                                    <Text as={'span'} fontWeight={'bold'}>1:</Text>{' '}
                                                    {item}{' '}
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>

                            </Box>
                        </Stack>
                        </Stack>
                </SimpleGrid>
            </Container>
        </LandingLayout>
    );
}
