import img1 from "../assets/images/profile.png";
import bgImg from "../assets/images/banner.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="hero px-10 pt-14 lg:pt-20"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="lg:flex lg:flex-row-reverse justify-evenly items-center max-w-7xl mx-auto">
        <div>
          <img src={img1} className="lg:max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 py-4">
          <p className="text-xl text-white">Hi! I am</p>
          <h1 className="text-5xl font-bold text-white">Promit Mondol</h1>
          <p className="py-6 text-white text-lg">
            I have a skilled React front-end developer with expertise in
            building user interfaces and web applications using the React.js
            library.
          </p>

          <Link to="/contact">
            <a className="btn btn-accent rounded-3xl px-6 text-xl">Hire me</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
