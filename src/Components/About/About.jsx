const About = () => {
    return (
        <div className="lg:max-w-[1180px] h-full font-Inter mx-auto  grid grid-cols-2 gap-10">
            <div className="">
                <button className="border border-[#020043] text-base bg-transparent text-primary rounded-full p-2 mb-4">who we are</button>
                <h1 className="font-semibold text-[30px] text-[#020043] w-[50%] mt-2">We Help To Get Solutions</h1>
                <p className="mt-7 w-[75%] text-[#020043] text-base font-normal">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                <button className="btn bg-yellow-300 px-2 py-1 mt-8"> Learn More </button>
            </div>
            <div className="relative">
                <img src="Rectangle 24.png" alt="" className="absolute" />
                <div className="absolute -left-24 -bottom-12  w-[395px] h-[210px] bg-primary py-5 px-9 rounded-[32px] text-white">
                    <h1 className="font-medium text-[26px] mb-3">Our mission is simple</h1>
                    <p className="text-base text-opacity-70">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
