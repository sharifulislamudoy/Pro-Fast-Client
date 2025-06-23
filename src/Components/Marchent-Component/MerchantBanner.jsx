import React from "react";
import bannerBg from "../../assets/be-a-merchant-bg.png";
import boxIllustration from "../../assets/location-merchant.png";

const MerchantBanner = () => {
    return (
        <section className="w-11/12 my-15 md:w-5/6 mx-auto relative bg-[#03373D] rounded-2xl p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
            {/* Background overlay */}
            <img
                data-aos="fade-down"
                src={bannerBg}
                alt="wave background"
                className="hidden md:flex absolute top-0 left-0 object-cover opacity-20 pointer-events-none"
            />

            {/* Content Section */}
            <div data-aos="fade-right" className="relative z-10 w-full lg:w-1/2 text-white space-y-4 mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                    Merchant and Customer Satisfaction
                    <br className="hidden sm:block" />
                    is Our First Priority
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200">
                    We offer the lowest delivery charge with the highest value along with
                    100% safety of your product. Pathao courier delivers your parcels in every
                    corner of Bangladesh right on time.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-[#CAEB66] text-black font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-lime-400 transition">
                        Become a Merchant
                    </button>
                    <button className="border border-[#CAEB66] text-[#CAEB66] font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-[#CAEB66] hover:text-black transition">
                        Earn with Profast Courier
                    </button>
                </div>
            </div>

            {/* Illustration */}
            <div data-aos="fade-left" className="relative z-10 w-full lg:w-1/2 flex justify-center">
                <img
                    src={boxIllustration}
                    alt="box illustration"
                    className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default MerchantBanner;
