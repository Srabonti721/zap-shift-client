const Faq = () => {
    return (
        <div className="my-20">
            <div className="text-center space-y-4">
                <h1 className="font-extrabold text-secondary text-4xl">
                    Frequently Asked Question (FAQ)
                </h1>
                <p className="my-4  lg:w-3xl mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with
                    Posture Pro. Achieve proper alignment, reduce pain, and
                    strengthen your body with ease!
                </p>
            </div>
            <div className="w-5/6 mx-auto space-y-4">
                <div className="collapse collapse-arrow bg-white shadow-xl border border-base-300  ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-secondary font-semibold">
                        How does this posture corrector work?
                    </div>
                    <div className="collapse-content text-sm">
                        A posture corrector works by providing support and
                        gentle alignment to your shoulders, back, and spine,
                        encouraging you to maintain proper posture throughout
                        the day. Here’s how it typically functions: A posture
                        corrector works by providing support and gentle
                        alignment to your shoulders..
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white shadow-xl border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                        I forgot my password. What should I do?
                    </div>
                    <div className="collapse-content text-sm">
                        Wear it for 30 to 60 minutes daily at first. Gradually
                        increase time to a maximum of 2 to 3 hours per day
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white shadow-xl border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                        Can a posture corrector fix my posture permanently?
                    </div>
                    <div className="collapse-content text-sm">
                        No, it acts as a training tool rather than a permanent
                        fix. Long-term results require pairing the device with
                        strengthening exercises
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white shadow-xl border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                        Will wearing a corrector weaken my back muscles?
                    </div>
                    <div className="collapse-content text-sm">
                        {" "}
                        It can cause muscle reliance if you wear it all day
                        without breaks. Limit daily use and keep your core
                        muscles active to prevent this.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white shadow-xl border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                        Can I wear a posture corrector under my clothes?
                    </div>
                    <div className="collapse-content text-sm">
                        {" "}
                        Yes, many lightweight and adjustable versions fit
                        discreetly beneath clothing.Choose a slim design so it
                        remains unnoticeable during work or daily tasks
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
