import { MdArrowOutward } from "react-icons/md";

const Card = ({ image, text, details }) => {
    return (
        <div className="mt-20 rounded-3xl" >
            <div className="relative ">
                <img src={image} alt="" className="rounded-3xl" />
                <div className="absolute  left-4 top-56  w-[350px] h-[150px] bg-opacity-60 bg-primary py-5 px-9 rounded-[32px] text-white">
                    <h1 className="font-medium text-[20px] mb-3">{text}</h1>
                    <div className="flex justify-between ">
                        <p className="text-xs text-opacity-70">{details}</p>
                        <button className="rounded-full p-3 mt-5 bg-yellow-300"><MdArrowOutward /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Card;