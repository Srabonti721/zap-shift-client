import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import group from "../../../assets/Group 5.png"
import "swiper/css";
import reviewsData from "../../../data/reviewsData.json";

const Reviews = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
            <img className="lg:w-1/4 mx-auto my-4" src={group} alt="gropu " />
          <h2 className="text-3xl md:text-4xl text-secondary font-bold mb-4">
            What Our Customers Are Saying
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            Enhance posture, mobility, and well-being effortlessly with
            Posture Pro. Achieve proper alignment, reduce pain, and
            strengthen your body with ease!
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviewsData.map((testimonial, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white rounded-2xl p-7 shadow-sm h-full">

                {/* Quote */}
                <div className="text-5xl font-serif text-gray-300 leading-none">
                  "
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 border-b-2 border-dashed border-gray-400 p-4 mt-3 mb-7">
                  {testimonial.description}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">

                  {/* Image - Left */}
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  {/* Name + Position - Right */}
                  <div>
                    <h3 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Reviews;