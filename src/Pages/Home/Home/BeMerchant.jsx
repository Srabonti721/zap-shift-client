import merchant from "../../../assets/location-merchant.png";
const BeMerchant = () => {
    return (
        <div data-aos="flip-up" className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat  bg-[#03373D] p-5 lg:p-20 rounded-4xl mx-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    alt="Tailwind CSS hero component"
                    src={merchant}
                    className=" lg:max-w-sm rounded-lg shadow-2xl"
                />
                <div className=" my-4 ">
                    <h1 className=" sm:text-3xl lg:text-5xl text-white font-bold">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>
                    <p className="py-6 text-white">
                        We offer the lowest delivery charge with the highest
                        value along with 100% safety of your product. Pathao
                        courier delivers your parcels in every corner of
                        Bangladesh right on time.
                    </p>
                   
                    <button className="btn btn-primary text-black rounded-full my-2 mr-4">
                        Become a Merchant
                    </button>
                    <button className="btn btn-primary text-primary btn-outline rounded-full ">
                        Earn with Profast Courier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;
