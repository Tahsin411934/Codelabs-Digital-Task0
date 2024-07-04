import React from 'react';
import Card from '../SharedStyle/Card';
import { MdArrowOutward } from 'react-icons/md';

const Services = () => {
    return (
        <div className="lg:max-w-[1180px] pt-20 h-full font-Inter mx-auto">
            <div className="lg:grid grid-cols-2 items-center justify-center  gap-10">
                <div className="mt-20">
                    <button className="border border-[#020043] text-base bg-transparent text-primary rounded-full p-2 mb-4">Services</button>
                    <h1 className="font-semibold text-[30px] text-[#020043] w-[50%] mt-2">We Help To Get Solutions</h1>
                    <p className="mt-7 w-[75%] text-[#020043] text-base font-normal">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                    <button className="btn bg-yellow-300 px-2 py-1 mt-8"> Learn More <MdArrowOutward /></button>
                </div>
                <Card image ={'Rectangle 27-2.png'} text ={'Advanced Technology'} details= {'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></Card>
                <Card image ={'Rectangle 27-1.png'} text ={'Online Doctor Meet'} details= {'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></Card>
                <Card image ={'Rectangle 27.png'} text ={'Consultancy your health'} details= {'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></Card>
               
               
            </div>
        </div>
    );
};

export default Services;
