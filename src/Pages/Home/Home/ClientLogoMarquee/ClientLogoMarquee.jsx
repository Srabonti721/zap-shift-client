import React from 'react'
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import amazon from "../../../../assets/brands/amazon_vector.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import startPeople from "../../../../assets/brands/start-people 1.png";
import start from "../../../../assets/brands/start.png";
import anotherCompany from "../../../../assets/brands/amazon.png";

const clientLogos = [
    amazon,
    casio,
    moonstar,
    randstad,
    startPeople,
    start,
    anotherCompany,
];

const ClientLogoMarquee = () => {
 return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4">

                <h2 className="mb-8 text-center text-2xl font-bold text-[#03373D]">
                   We've helped thousands of sales teams
                </h2>

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    freeMode={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {clientLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex h-24 items-center justify-center">
                                <img
                                    src={logo}
                                    alt={`Client ${index + 1}`}
                                    className="max-h-16 max-w-36 object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default ClientLogoMarquee
