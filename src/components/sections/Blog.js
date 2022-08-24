import React from 'react';
import {

    Box, Heading, Link, Image, Text, HStack, Tag, useColorModeValue, Container
} from '@chakra-ui/react';
import { NavLink as RouterLink } from "react-router-dom";
import BlogTags from "./BlogTags";


export default function ArticleList({title}) {
    console.log(title.image)
    return (
        <Container maxW={'7xl'} p="12">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link as={RouterLink}  to={title.uri} state={{ recipe: title }} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={title.image}
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <BlogTags tags={title.tags} />
                    <Heading marginTop="1">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {title.name}
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </Text>
                </Box>
            </Box>
        </Container>
    );
};

