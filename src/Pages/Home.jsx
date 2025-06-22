import React from 'react';
import Banner from '../Components/Home-Components/Banner';
import HowItWorksContainer from '../Components/HowItWork-Component/HowItWorksContainer';
import ServicesSection from '../Components/Services-Component/ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorksContainer />
            <ServicesSection />
        </div>
    );
};

export default Home;