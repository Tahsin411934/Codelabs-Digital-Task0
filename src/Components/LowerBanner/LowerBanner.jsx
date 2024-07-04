

const LowerBanner = () => {
    return (
        <div className="pt-44">
            <div
                className="relative h-96"
                style={{
                    height: '470px',
                    backgroundImage: `linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%, rgba(2, 0, 67, 0.47) 107.111%) `,
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


                                <button className="py-1 rounded-lg bg-yellow-300 px-3 "> Learn More </button>
                                <button className="py-1 rounded-lg bg-transparent text-white border border-white px-2 "> Learn More </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LowerBanner;