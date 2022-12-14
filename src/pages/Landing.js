import React from 'react';

import LandingLayout from '../components/layouts/LandingLayout';
import CaptionCarousel from '../components/sections/Carousel';
import recipes from "../data/recipes.json";
import ArticleList from "../components/sections/Blog";

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
        {recipes.map((recipe) => (
            <ArticleList key={recipe.id} title={recipe}/>
        ))}
    </LandingLayout>

  );
}
