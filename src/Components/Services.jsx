import { FaLaptopCode } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { MdDesignServices, MdDraw, MdLaptopWindows } from "react-icons/md";

const Services = () => {
  return (
    <div className="py-16 px-5 lg:px-20 bg-gray-950 bg-opacity-80 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading={"What I Do?"} />
        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className="flex items-center gap-4 text-white"
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
            <FaLaptopCode className="text-7xl text-accent" />
            <div>
              <h1 className="text-2xl font-bold">Web Development</h1>
              <p>
                In-depth knowledge of modern HTML/CSS. Strong understanding of
                JavaScript and experience with frameworks/libraries such as
                React.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 text-white"
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
            <MdLaptopWindows className="text-7xl text-accent" />
            <div>
              <h1 className="text-2xl font-bold">Web Design</h1>
              <p>
                Integrate data from various back-end services and databases.
                Write well-designed, testable, efficient code by using best
                software development practices.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 text-white"
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <MdDesignServices className="text-7xl text-accent" />
            <div>
              <h1 className="text-2xl font-bold">UI/UX Design</h1>
              <p>
                UX design is about understanding and improving the entire
                experience a user has with a product.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 text-white"
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <MdDraw className="text-7xl text-accent" />
            <div>
              <h1 className="text-2xl font-bold">Adobe Photoshop</h1>
              <p>
                Proficiency in Photoshop enables users to create, edit, and
                manipulate images with a variety of tools and techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
