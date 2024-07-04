import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import ComprehensiveCare from "../../Components/ComprehensiveCare/ComprehensiveCare";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LowerBanner from "../../Components/LowerBanner/LowerBanner";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ComprehensiveCare></ComprehensiveCare>
            <About></About>
            <Services></Services>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <LowerBanner></LowerBanner>
            <Footer></Footer>

        </div>
    );
};

export default Home;