import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import "./Styles/contact.scss";
import { LiaLinkedinIn } from "react-icons/lia";

function Contact() {
  return (
    <div>
      <div className="footer">
        <h1 className="text-4xl  text-center mb-10 text-slate-200 connect">
          {" "}
          Connect with Me
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          <a
            className="text-4xl"
            href="#"
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
            className="text-4xl"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
