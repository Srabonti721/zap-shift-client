
import ServiceCard from "./ServiceCard";
import { services } from "./services";

const OurServices = () => {
  return (
    <section className="bg-[#03373D] py-16 md:py-20 lg:py-24 rounded-3xl">
      <div className="mx-auto w-11/12 max-w-7xl">
        
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-4xl font-extrabold  text-white">
            Our Services
          </p>

          <p className="mt-4 text-sm leading-7 text-[#DADADA] md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Service Cards */} 
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;