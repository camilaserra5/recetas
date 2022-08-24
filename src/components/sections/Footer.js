import {ButtonGroup, Container, IconButton, Stack, Text, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import SocialButton from "../ui/SocialButton";

const Footer = () => (
    <Container
        opacity="0.60"
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white', 'white')}

        as="footer"
        role="contentinfo"
        py={{
            base: '2',
            md: '6',
        }}
        w="100%"
        minW="100%"
        alignContent={"left"}
>
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
        >
            <Stack justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                    <SocialButton label={'Twitter'} href={'https://twitter.com/lauratmares'}>
                        <FaTwitter size={50} />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={'linkedin.com/in/lauratmares/'}>
                        <FaLinkedin size={50} />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com/lauratmares'}>
                        <FaInstagram size={50} />
                    </SocialButton>
                </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Ketchup&Alioli Inc. All rights reserved.
            </Text>
        </Stack>
    </Container>
)

export default Footer;