import React from "react";
import {Box, Image, Text} from "@chakra-ui/react";
import logo from "../../assets/misslamase.svg"

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                <Image
                    rounded={'md'}
                    src={logo}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={{ base: '100%', sm: '40px', lg: '40px' }}
                />
            </Text>
        </Box>
    );
}
