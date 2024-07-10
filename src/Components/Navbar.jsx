import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacts</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-slate-600 bg-opacity-55">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <IoMenu className="text-2xl font-bold text-accent" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-stone-500 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="lg:text-2xl text-gray-200" data-aos="zoom-in" data-aos-duration="1000">Promit Mondol</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-base ">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a href="https://www.facebook.com/promit.mondal.79" target="_blank">
          <FaFacebook className="text-3xl text-white hover:text-blue-500 hover:text-5xl" />
        </a>
        <a href="https://www.linkedin.com/in/promit-mondol21">
          <FaLinkedin className="text-3xl text-white hover:text-blue-800 hover:text-5xl"/>
        </a>
        <a href="https://github.com/promit21" target="_blank">
          <FaGithub className="text-3xl text-white hover:text-black hover:text-5xl"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
