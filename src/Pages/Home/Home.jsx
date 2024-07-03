import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import ComprehensiveCare from "../../Components/ComprehensiveCare/ComprehensiveCare";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ComprehensiveCare></ComprehensiveCare>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;