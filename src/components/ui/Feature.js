import React from "react";
import {Flex, Stack, Text} from "@chakra-ui/react";

const Feature = ({ title, text, icon }) => {
    return (
        <Stack
            align={'center'}
        >
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600} align={'center'} justify={'center'}>{title}</Text>
            <Text color={'gray.600'} align={'center'} justify={'center'}>{text}</Text>
        </Stack>
    );
};

export default Feature;