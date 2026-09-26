const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description } = service;

    return (
        <div className="group hover:bg-[#CAEB66]  rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Icon */}
            <div className="flex  justify-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="text-3xl" />
                </div>
            </div>
            <div className="text-center ">
                {/* Title */}
                <h3 className="mb-3 text-xl font-bold ">{title}</h3>

                {/* Description */}
                <p className="text-sm leading-7 text-base-content/70">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
