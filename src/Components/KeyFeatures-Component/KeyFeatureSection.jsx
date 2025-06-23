import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import KeyFeatureCard from './KeyFeatureCard';

const KeyFeatureSection = () => {
    const [features , setFeatures] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetch('/feature.json')
        .then((res) => res.json())
        .then((data) => setFeatures(data))
    },[])
    return (
        <div className='py-14 px-4 w-5/6 mx-auto'>
            <div className='flex flex-col gap-10'>
                {features.map((feature, index) => (
                    <KeyFeatureCard
                    key={index}
                    feature={feature}
                     />
                ))}
            </div>
        </div>
    );
};

export default KeyFeatureSection;