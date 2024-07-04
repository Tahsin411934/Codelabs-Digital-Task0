import { MdArrowOutward } from "react-icons/md";


const LowerBanner = () => {
    return (
        <div className="pt-10">
            <div
                className="relative py-32 "
                style={{
                    backgroundImage: `linear-gradient(to right, #e2e2ea, #e7e7ee, #ededf2, #f2f2f6, #f8f8fa,#f8f8fa,#f8f8fa,#f8f8fa, #f8f8fa, #f8f8fa, #f8f8fa, #f8f8fa, #f2f2f6, #ededf2, #e7e7ee, #e2e2ea)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative lg:max-w-[1180px] mx-auto">
                    <div
                        className="h-96 rounded-xl"
                        style={{
                            height: '470px',
                            background: 'radial-gradient(647.71% 142.52% at 98% 78%, rgb(2, 0, 67), rgba(2, 0, 67, 0.3) 100%), url("Rectangle 32.png")',
                            borderRadius: '48px',
                        }}
                    >
                        <div>
                            <div className="flex justify-end mr-20 pt-10">
                                <img src="logo light.png" alt="" />
                            </div>
                        </div>
                        <div className="py-5 px-16">
                            <h1 className="text-[40px] text-white font-semibold py-5">Get Your <br />
                                First Appointment <br />
                                at 50% Off!</h1>

                            <div className="flex gap-3 ">
                                <button className="btn bg-yellow-300 px-2 py-1 border-none"> Appointment <MdArrowOutward /></button>
                                <button className="btn bg-transparent text-white px-2 py-1 "> Learn More <MdArrowOutward /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LowerBanner;