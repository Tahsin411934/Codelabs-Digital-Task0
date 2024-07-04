const ComprehensiveCare = () => {
    return (
        <div className="bg-gradient-to-b mb-36 from-[#bbbbc7] to-[#FFFFF5] " >
            <div className="pt-10 lg:max-w-[1180px] h-full mx-auto  lg:grid grid-cols-5 gap-5">
                <div className="hidden lg:flex">
                    <div className="col-span-1 bg-[#FBFBFB]  rounded-3xl p-[20px]">
                        <h1 className="font-semibold text-[40px] text-[#020043]">90%</h1>
                        <p className="text-sm font-normal text-[#020043] w-[70%] mb-1">Patient satisfaction rate, reflecting our commitment.</p>
                        <div className="flex justify-center items-center mt-5">
                            <img width={125} height={150} src="Group 12.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <h1 className="mx-auto text-center -mt-5 w-[70%] text-[48px] text-[#020043] font-semibold">Comprehensive Care for Every Patient</h1>
                    <div className=" grid grid-cols-3 items-center justify-center gap-5">
                        <div className="col-span-1 bg-[#FBFBFB]  rounded-3xl p-[20px]">
                            <h1 className="font-semibold text-[40px] text-[#020043]">500+</h1>
                            <p className="text-sm font-normal text-[#020043] w-[70%]">Board-certified doctors.</p>
                            <div className="flex justify-end items-end ">
                                <img width={75} height={45} src="contract (1) 1.png" alt="" />
                            </div>
                        </div>

                        <div className="col-span-1 bg-[#FBFBFB]  rounded-3xl p-[20px]">
                            <div className="flex items-center gap-3 ">
                                <h1 className="font-semibold text-[40px] text-[#020043]">4.8</h1>
                                <img src="fi-sr-star.png" alt="" />
                            </div>

                            <p className="text-sm mb-1 font-normal text-[#020043] w-[70%]">Over 20,000 Patient</p>
                            <div className="flex justify-start items-end mt-1">
                                <img width={75} height={45} src="Group 7.png" alt="" />
                            </div>
                        </div>

                        <div className="col-span-1 bg-[#FBFBFB]  rounded-3xl p-[20px]">
                            <h1 className="font-semibold text-[40px] text-[#020043]">$ 5000</h1>
                            <p className="text-sm font-normal text-[#020043] w-[70%]">Money spend for poor patient</p>
                            <div className="flex justify-end items-end ">
                                <img width={75} height={45} src="Group.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="hidden lg:flex">
                <div className="col-span-1 bg-[#FBFBFB]  rounded-3xl p-[20px]">
                    <h1 className="font-semibold text-[40px] text-[#020043]">50+</h1>
                    <p className="text-sm font-normal text-[#020043] w-[60%] mb-1">Free lession video
                        for patient.</p>
                    <div className="flex justify-center items-center pt-2">
                        <img width={125} src="Group (1).png" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCare;