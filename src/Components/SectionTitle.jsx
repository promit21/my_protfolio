/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
  return (
    <div className="text-center">
      <h1
        className="text-6xl font-bold py-4 text-white relative"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
