import {
    FaClipboardCheck,
    FaBoxOpen,
    FaShippingFast,
    FaCheckCircle,
} from "react-icons/fa";

const steps = [
    {
        id: 1,
        icon: FaClipboardCheck,
        title: "Booking Pick & Drop",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        id: 2,
        icon: FaBoxOpen,
        title: "Pickup Your Parcel",
        description:
            "Our delivery agent collects your parcel safely from your preferred pickup location.",
    },
    {
        id: 3,
        icon: FaShippingFast,
        title: "Safe & Fast Delivery",
        description:
            "Your parcel is carefully handled and transported through our reliable delivery network.",
    },
    {
        id: 4,
        icon: FaCheckCircle,
        title: "Parcel Delivered",
        description:
            "Your parcel reaches the recipient safely and on time with delivery confirmation.",
    },
];

const HowItWork = () => {
    return (
        <section className="bg-base-200 py-16 md:py-20">
            <div className="mx-auto w-11/12 max-w-7xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="text-2xl font-extrabold text-[#03373D]">
                        How It Works
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.id}
                                className="group rounded-2xl bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className=" mb-5 flex text-[#03373D] transition-all duration-300">
                                    <Icon className="text-5xl" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-2 text-lg font-bold text-[#03373D]">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-base-content/60">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWork;