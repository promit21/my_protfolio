import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j6knlju", "template_jshisin", form.current, {
        publicKey: "F5zshW062iYActFQt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your massage send has been successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-slate-950 bg-opacity-90 min-h-screen pt-16 pb-10">
      <SectionTitle heading={"Get in Touch"} />
      <div className="hero text-white">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Address</h1>
            <p className="py-6">
              Dowlotpur, Mashail, Nawabgonj, Dhaka-1320, Bangladesh
            </p>
            <h2>Phone: +8801409348777</h2>
            <h2>E-mail: promitmondol21@gmail.com</h2>
            <div className="mt-6">
              <h1 className="text-2xl font-bold">FOLLOW ME</h1>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/promit.mondal.79"
                  target="_blank"
                >
                  <FaFacebook className="text-4xl hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/promit-mondol21">
                  <FaLinkedin className="text-4xl hover:text-blue-800" />
                </a>
                <a href="https://github.com/promit21" target="_blank">
                  <FaGithub className="text-4xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-slate-500 w-full  shadow-2xl">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="input bg-slate-400 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="input bg-slate-400 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  placeholder="Write Your Massage"
                  name="message"
                  className="textarea bg-slate-400 textarea-lg w-full text-black"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
