import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./Styles/contact.scss";
import { LiaLinkedinIn } from "react-icons/lia";
import Gmail from "../assets/skills/gmail.svg";

function Contact() {
  return (
    <div>
      <div className="footer" id="contact">
        <h1 className="text-4xl  text-center mb-10 text-slate-200 connect">
          {" "}
          Connect with Me
        </h1>
        <div className="flex flex-wrap social-footer gap-10">
          <a
            className="text-4xl"
            href="https://github.com/zakariDS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-4xl"
            rel="noopener noreferrer"
          >
            <LiaLinkedinIn />
          </a>
          <a
            className="text-3xl"
            href="mailto:zmumuni.da@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Gmail} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
