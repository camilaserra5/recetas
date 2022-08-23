import React from 'react';

import LandingLayout from '../components/layouts/LandingLayout';
import CaptionCarousel from '../components/sections/Carousel';
import cards from "../data/carousel.json";
import {Box, Container, Heading, Stack, Text} from "@chakra-ui/react";
import recipes from "../data/recipes.json";
import {Link} from "react-router-dom";

export default function Landing() {
  return (
    <LandingLayout>
      {/* <Hero
        title="Build this rad landing page from scratch"
        subtitle="This is the subheader section where you describe the basic benefits of your product"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      /> */}
      <CaptionCarousel />

        {recipes.map((recipe, index) => (
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                <Link to={'recipes/' + recipe.uri} state={{ recipe: recipe }}>
                    {recipe.name}
                </Link>
            </Text>
        ))}
    </LandingLayout>
  );
}
