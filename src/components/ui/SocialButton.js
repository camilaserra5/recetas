import {Button, useColorModeValue, VisuallyHidden} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
    return (
        <Button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            width="50px"
            height="20px"
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </Button>
    );
};

export default SocialButton;