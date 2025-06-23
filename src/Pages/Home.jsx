import React from 'react';
import Banner from '../Components/Home-Components/Banner';
import HowItWorksContainer from '../Components/HowItWork-Component/HowItWorksContainer';
import ServicesSection from '../Components/Services-Component/ServicesSection';
import BrandCarousel from '../Components/Brands-Component/BrandCarousel';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorksContainer />
            <ServicesSection />
            <BrandCarousel />
        </div>
    );
};

export default Home;