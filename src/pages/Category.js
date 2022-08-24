import {useLocation} from "react-router-dom";
import LandingLayout from "../components/layouts/LandingLayout";
import {Box} from "@chakra-ui/react";
import ProductGrid from "../components/ui/ProductGrid";
import ProductCard from "../components/ui/ProductCard";
import recipes from "../data/recipes.json";


import {
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
} from '@chakra-ui/react';


const Feature = ({ heading, text }) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p>{text}</chakra.p>
        </GridItem>
    );
};

export default function Category() {
    const location = useLocation()
    let recipesFromCategory = recipes.filter( r =>
         r.tags.includes(location.state.category)
    );
    return (
        <LandingLayout>
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}>
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <chakra.h2 fontSize="3xl" fontWeight="700">
                            Categoría: {location.state.category}
                        </chakra.h2>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}>
                {recipesFromCategory.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Box>
        </LandingLayout>
    );
}