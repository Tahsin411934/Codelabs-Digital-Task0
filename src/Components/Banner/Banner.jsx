
import rectangle5 from '/Rectangle 5.png';

const Banner = () => {
    return (
        <div>
            <div
                className="relative "
                style={{
                    height: '470px',
                    backgroundImage: `linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%, rgba(2, 0, 67, 0.47) 107.111%)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            >

                <div
                    className=" lg:max-w-[1180px]  mx-auto"
                    style={{
                        height: '470px',
                        backgroundImage: `linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%, rgba(2, 0, 67, 0.47) 107.111%), url(${rectangle5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '48px',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Banner;
