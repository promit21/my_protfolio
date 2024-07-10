import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import MyWork from "../Components/MyWork";
import Resume from "../Components/Resume";
import Services from "../Components/Services";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Resume/>
            <MyWork/>
            <Contact/>
        </div>
    );
};

export default Home;