import SectionTitle from "./SectionTitle";

const MyWork = () => {
  return (
    <div className="bg-gray-950 bg-opacity-80 space-y-8 py-7 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading={"My Works"} />
        <div className="flex flex-wrap justify-around gap-5">
          <div className="card bg-stone-950 text-white w-[500px] shadow-xl ">
            <figure>
              <img
                src="https://i.ibb.co/f1T5sww/Torusim-Img.png"
                alt="Torusim-Img"
                border="0"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tourists Management System</h2>
              <p></p>
              <a
                href="https://tourists-management-system.web.app"
                target="_blank"
                className="btn btn-accent"
              >
                Show Live
              </a>
            </div>
          </div>

          <div className="card  bg-stone-950 text-white w-[500px] shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/y0PTyS1/Doctor-Img.png"
                alt="Doctor-Img"
                border="0"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Appointment Management System</h2>
              <p></p>
              <a
                href="https://doctor-house-system.web.app"
                target="_blank"
                className="btn btn-accent"
              >
                Show Live
              </a>
            </div>
          </div>
          <div className="card bg-stone-950 text-white w-[500px] shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/BrHsvvD/Schoolar-Ship-Img.png"
                alt="Schoolar-Ship-Img"
                border="0"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Scholarship Management System</h2>
              <p></p>
              <a
                href="https://scholarship-management-s-31bd2.web.app"
                target="_blank"
                className="btn btn-accent"
              >
                Show Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
