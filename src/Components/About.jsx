import SectionTitle from "./SectionTitle";
import cv from "../assets/resume.pdf";

const About = () => {
  return (
    <div className="pt-20 bg-gray-950 bg-opacity-90 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading={"About Me"} />
        <div className="lg:flex px-5 justify-center items-center gap-10 text-white">
          <div className="lg:w-4/6 space-y-5">
            <h1 className="text-2xl font-bold">
              I am <span className="text-accent">Promit Mondol</span>, a Web
              Developer
            </h1>
            <p>
              Develop and maintain websites using HTML, CSS, JavaScript, and
              other web development languages and frameworks. Create and
              optimize website layouts and user interfaces using HTML/CSS
              practices. Integrate data from various back-end services and
              databases.
            </p>
            <p>
              Write well-designed, testable, efficient code by using best
              software development practices. Ensure the technical feasibility
              of UI/UX designs. Collaborate with designers and developers to
              bring mockups and wireframes to life. Conduct website performance
              tests and implement performance improvements. Troubleshoot and
              resolve website issues and bugs.
            </p>
          </div>
          <div className="space-y-2 lg:text-left text-center">
            <p>Name: Promit Mondol</p>
            <div className="divider"></div>
            <p>E-mail: promitmondol21@gmail.com</p>
            <div className="divider"></div>
            <p>Age: 26</p>
            <div className="divider"></div>
            <p>From: Dhaka, Bangladesh</p>

            <a
              className="btn btn-accent rounded-badge px-8 text-lg font-bold"
              href={cv}
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:flex justify-evenly items-center text-center space-y-10 text-white py-9">
          <div className="">
            <div className="text-5xl font-bold">1+</div>
            <div className="font-semibold">Years Experiance</div>
          </div>
          <div className="">
            <div className="text-5xl font-bold">150+</div>
            <div className="font-semibold">Happy Clients</div>
          </div>

          <div className="">
            <div className="text-5xl font-bold">50+</div>
            <div className="font-semibold">Projects Done</div>
          </div>
          <div className="">
            <div className="text-5xl font-bold">28</div>
            <div className="font-semibold">Get Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
