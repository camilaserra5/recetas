import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack, Tag,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {NavLink as RouterLink} from "react-router-dom";


export default function ProductCard(props) {
    const { product, rootProps } = props
    const { name, image, uri } = product
    return (
        <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={'../'+image}
                        alt={name}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
                    />
                </AspectRatio>
            </Box>
            <Stack>
                <Stack spacing="1" align="center">
                    <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.400')}>
                        {name}
                    </Text>
                </Stack>
            </Stack>
            <Stack align="center">
                <Link  as={RouterLink}  to={'../' + uri}
                      state={{ recipe: product }} _hover={{ textDecoration: 'none' }}
                      textDecoration="underline" fontWeight="medium"
                      color={useColorModeValue('gray.600', 'gray.400')}>
                    Ver la receta
                </Link>
            </Stack>
        </Stack>
    )
}