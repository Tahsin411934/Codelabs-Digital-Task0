const Faq = () => {
    return (
        <div className="lg:max-w-[1180px]  h-full font-Inter mx-auto">
            <div className="mt-20 mb-5">
                <button className="border border-[#020043] text-base bg-transparent text-primary rounded-full p-2 mb-4">Faq</button>
                <h1 className="font-semibold text-[30px] text-[#020043] mt-2">We Help To Get Solutions</h1>
            </div>
            <div className="ml-7">
                <div className="collapse collapse-arrow" style={{ backgroundColor: 'white' }}>
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium" style={{ color: '#020043', fontFamily: 'Inter', fontSize: '20px', fontWeight: 500, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize' }}>What are your office hours?</div>
                    <div className="collapse-content" style={{ color: '#343268', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize', opacity: 0.8 }}>
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow" style={{ backgroundColor: 'white' }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium" style={{ color: '#020043', fontFamily: 'Inter', fontSize: '20px', fontWeight: 500, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize' }}>How can I schedule an appointment?</div>
                    <div className="collapse-content" style={{ color: '#343268', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize', opacity: 0.8 }}>
                        <p>You can schedule an appointment by calling our office or using our online booking system.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow" >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium" style={{ color: '#020043', fontFamily: 'Inter', fontSize: '20px', fontWeight: 500, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize' }}>Do you accept insurance?</div>
                    <div className="collapse-content" style={{ color: '#343268', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize', opacity: 0.8 }}>
                        <p>Yes, we accept most major insurance plans. Please check with our office for details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow" >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium" style={{ color: '#020043', fontFamily: 'Inter', fontSize: '20px', fontWeight: 500, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize' }}>What should I bring to my appointment?</div>
                    <div className="collapse-content" style={{ color: '#343268', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize', opacity: 0.8 }}>
                        <p>Please bring your ID, insurance card, and any relevant medical records.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white" >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium" style={{ color: '#020043', fontFamily: 'Inter', fontSize: '20px', fontWeight: 500, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize' }}>Do you offer telemedicine appointments?</div>
                    <div className="collapse-content" style={{ color: '#343268', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0%', textAlign: 'left', textTransform: 'capitalize', opacity: 0.8 }}>
                        <p>Yes, we offer telemedicine appointments for your convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
