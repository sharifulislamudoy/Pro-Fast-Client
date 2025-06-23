import React from 'react';
import Banner from '../Components/Home-Components/Banner';
import HowItWorksContainer from '../Components/HowItWork-Component/HowItWorksContainer';
import ServicesSection from '../Components/Services-Component/ServicesSection';
import BrandCarousel from '../Components/Brands-Component/BrandCarousel';
import KeyFeatureSection from '../Components/KeyFeatures-Component/KeyFeatureSection';
import MerchantBanner from '../Components/Marchent-Component/MerchantBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorksContainer />
            <ServicesSection />
            <BrandCarousel />
            <KeyFeatureSection />
            <MerchantBanner />
        </div>
    );
};

export default Home;