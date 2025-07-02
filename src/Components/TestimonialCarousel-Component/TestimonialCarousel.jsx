// TestimonialCarousel.jsx
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState, useEffect } from 'react'

const testimonials = [
    { name: 'Awlad Hossin', title: 'Senior Product Designer' },
    { name: 'Rasel Ahamed', title: 'CTO' },
    { name: 'Nasir Uddin', title: 'CEO' },
    { name: 'Awlad Again', title: 'Engineer' },
    { name: 'Shariful Islam', title: 'Designer' },
    { name: 'Mohona Mukta', title: 'Designer' },
]

export default function TestimonialCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: 'free-snap',
        slides: {
            perView: 3,
            spacing: 15,
            origin: 'center', // Center the slides
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
    })

    // Calculate the "center" index among visible slides
    const centerIdx = (idx) => {
        const total = testimonials.length
        let visibleIndices = []
        for (let i = -1; i <= 1; i++) {
            visibleIndices.push((currentSlide + i + total) % total)
        }
        return visibleIndices.includes(idx)
    }

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div ref={sliderRef} className="keen-slider">
                {testimonials.map((item, idx) => {
                    const isCenter = idx === currentSlide
                    const isVisible = centerIdx(idx)

                    return (
                        <div
                            key={idx}
                            className={`keen-slider__slide flex items-center justify-center transition-all duration-500 ${isCenter
                                    ? 'scale-100 translate-y-0 opacity-100 z-20'
                                    : isVisible
                                        ? 'scale-90 translate-y-4 opacity-50 z-10'
                                        : 'scale-75 opacity-0 pointer-events-none z-0'
                                }`}
                        >
                            <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
                                <p className="text-gray-600 mb-4">
                                    “A posture corrector works by providing support and gentle alignment to your shoulders...”
                                </p>
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <p className="text-sm text-gray-400">{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Arrows */}
            <div className="flex justify-center mt-6 gap-4">
                <button
                    onClick={() => instanceRef.current?.prev()}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl"
                >
                    ←
                </button>
                <button
                    onClick={() => instanceRef.current?.next()}
                    className="w-10 h-10 bg-lime-400 text-white rounded-full flex items-center justify-center text-xl"
                >
                    →
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-lime-400' : 'bg-gray-300'
                            }`}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                    />
                ))}
            </div>
        </div>
    )
}
