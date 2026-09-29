const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: "https://i.ibb.co.com/m5RvFjTG/Transit-warehouse.png",
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: "https://i.ibb.co.com/S4qDksKD/Vector.png",
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: "https://static.vecteezy.com/system/resources/previews/005/747/719/non_2x/customer-support-icon-24-hours-call-center-icon-vector.jpg",
  },
];

const Features = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Top Dotted Border */}
        <div className="border-t-2 border-dashed border-gray-300 mb-10"></div>

        {/* Cards */}
     <div className="flex-1 space-y-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-sm"
    >
      {/* Image */}
      <div className="shrink-0 flex items-center">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Dotted Vertical Line */}
      <div className="hidden sm:block h-24 border-l-2 border-dashed border-gray-300"></div>

      {/* Text */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {feature.title}
        </h3>

        <p className="text-gray-600 leading-7">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>

        {/* Section Bottom Dotted Border */}
        <div className="border-b-2 border-dashed border-gray-300 mt-10"></div>

      </div>
    </section>
  );
};

export default Features;