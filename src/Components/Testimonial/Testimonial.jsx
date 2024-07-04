import TestimonalCards from "../SharedStyle/TestimonalCards";


const Testimonial = () => {
    return (
        <div className="font-Inter">
            <div className="lg:max-w-[1180px] mt-56 h-full font-Inter mx-auto ">

                <div className="mt-20 mb-20">
                    <button className="border border-[#020043] text-base bg-transparent text-primary rounded-full p-2 mb-4">Testimonal</button>
                    <h1 className="font-semibold text-[30px] text-[#020043]  mt-2">We Help To Get Solutions</h1>

                </div>
                <div className="grid grid-cols-3">
                    <div className="p-5">
                        <h1 className="font-semibold text-[19px] text-[#020043] w-[80%] mb-1">Expertise and Compassion Combined</h1>
                        <p className="font-normal text-[12px] text-primary mb-6 w-[90%]">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex gap-3">
                            <img src="Ellipse 10.png" alt="" className="w-12 h-12" />
                            <div>
                                <h1 className="font-semibold text-[12px]">Sarah D, <span className="font-normal text-xs">IT Professional</span></h1>
                                <div className="flex items-center gap-1" >
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-5">
                        <h1 className="font-semibold text-[19px] text-[#020043] w-[80%] mb-1">Life-Saving Care, Life-Changing Experience</h1>
                        <p className="font-normal text-[12px] text-primary mb-6 w-[90%]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex gap-3">
                            <img src="Ellipse 10 (1).png " alt="" className="w-12 h-12" />
                            <div>
                                <h1 className="font-semibold text-[12px]">Michael R, <span className="font-normal text-xs"> Business Executive</span></h1>
                                <div className="flex items-center gap-1" >
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h1 className="font-semibold text-[19px] text-[#020043] w-[80%] mb-1 ">A Partner in Health and
                        Wellness</h1>
                        <p className="font-normal text-[12px] text-primary mb-6 w-[95%]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                        <div className="flex gap-3">
                            <img src="Ellipse 10 (2).png " alt="" className="w-12 h-12" />
                            <div>
                                <h1 className="font-semibold text-[12px]">David S, <span className="font-normal text-xs"> Lawyer</span></h1>
                                <div className="flex items-center gap-1" >
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                    <img src="fi-sr-star.png" alt=""  className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;