import Marquee from "react-fast-marquee";
import casio from "../../assets/brands/casio.png";
import amazon from "../../assets/brands/amazon.png";
import amazonVector from '../../assets/brands/amazon_vector.png'
import moonstar from "../../assets/brands/moonstar.png";
import starplus from "../../assets/brands/start.png";
import startpeople from "../../assets/brands/start-people 1.png";
import randstad from "../../assets/brands/randstad.png";

const BrandCarousel = () => {
    const logos = [casio, amazon, moonstar, starplus, startpeople, randstad, amazonVector];

    return (
        <div className="bg-gray-100 py-10">
            <h2 data-aos="fade-down" className="text-center text-teal-900 font-bold text-xl mb-8">
                We've helped thousands of sales teams
            </h2>
            <Marquee
                gradient={false}
                speed={100}
                pauseOnHover={true}
                className="flex gap-10"
            >
                {logos.map((logo, idx) => (
                    <img
                        data-aos="fade-up"
                        key={idx}
                        src={logo}
                        alt={`Brand ${idx}`}
                        className="h-6 mx-20 object-contain"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default BrandCarousel;
