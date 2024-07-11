import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import cv from "../assets/resume.pdf";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { MdOutlineDownload } from "react-icons/md";

const Resume = () => {
  return (
    <div className="bg-slate-950 bg-opacity-90 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading={"Resume"} />
        <div className="lg:grid grid-cols-2 gap-10 px-8">
          {/* My Education */}
          <div className="grid grid-cols-1 gap-5 py-5">
            <h1 className="text-3xl text-white font-bold">My Education</h1>

            <div
              className="card bg-slate-950 lg:w-[500px] shadow-xl"
              data-aos="flip-left"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <div className="card-body text-white">
                <div className="badge badge-accent font-semibold">
                  2016-2018
                </div>
                <h1 className="card-title">
                  Higher Secondary School Certificate
                </h1>
                <h2 className="text-accent font-semibold">
                  Gov. Ispahani University College
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero amet quos quaerat aspernatur culpa dolores
                  necessitatibus iusto quisquam molestiae ratione.
                </p>
              </div>
            </div>
            <div
              className="card bg-slate-950 lg:w-[500px] shadow-xl"
              data-aos="flip-right"
              data-aos-duration="2000"
              data-aos-delay="70"
            >
              <div className="card-body text-white">
                <div className="badge badge-accent font-semibold">
                  2019-2024
                </div>
                <h1 className="card-title">BSC in CSE</h1>
                <h2 className="text-accent font-semibold">
                  Dhaka International University
                </h2>
                <p>
                  Dhaka International University (DIU) is a private university
                  located in Dhaka, Bangladesh. Established in 1995, DIU aims to
                  provide high-quality education and research opportunities to
                  students.
                </p>
              </div>
            </div>
          </div>
          {/* My Experience */}
          <div className="grid grid-cols-1 gap-5 py-5">
            <h1 className="text-3xl text-white font-bold">My Experience</h1>
            <div
              className="card bg-slate-950 lg:w-[500px] shadow-xl"
              data-aos="flip-left"
              data-aos-duration="2000"
              data-aos-delay="90"
            >
              <div className="card-body text-white">
                <div className="badge badge-accent font-semibold">
                  2018-2024
                </div>
                <h1 className="card-title">Computer Operator</h1>
                <h2 className="text-accent font-semibold">
                  Malikandha Ideal High School
                </h2>
                <p>
                  Monitored computer systems and networks to ensure optimal
                  performance. Performed routine maintenance tasks such as
                  system updates, backups, and troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* My Skills */}
        <div className="space-y-6 py-6">
          <h1 className="text-3xl text-center text-white font-bold">
            My Skills
          </h1>
          <div className="flex justify-evenly items-center">
            <FaHtml5 className="text-6xl text-orange-400" />
            <FaCss3Alt className="text-6xl text-sky-400" />
            <DiJavascript className="text-6xl text-yellow-400" />
            <FaReact className="text-6xl text-blue-500" />
            <FaNodeJs className="text-6xl text-green-500" />
            <SiExpress className="text-6xl text-yellow-500" />
            <SiMongodb className="text-6xl text-green-500" />
          </div>
        </div>
        <div className="text-center py-4">
          <a
            className="btn btn-accent rounded-3xl font-bold px-8"
            href={cv}
            target="_blank"
          >
            Download CV
            <MdOutlineDownload className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
