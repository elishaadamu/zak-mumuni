import React, { useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { FaMale } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import "./Styles/contact.scss";
import Me from "../assets/contact.png";
import Loader from "./Loader";
import Msg from "./Msg";

// Validation schema using Yup
const schema = yup.object().shape({
  user_name: yup.string().required("Name is required"),
  user_email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [successful, setSuccessful] = useState(false);

  // Set up form handling with react-hook-form and Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data) => {
    setLoading(true);
    setIsErr(false);
    setSuccessful(false);

    emailjs
      .sendForm(
        "service_a0rp1r4",
        "template_uvm7pn7",
        form.current,
        "16pJR90itYXSFjqHa"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsErr(false);
          setSuccessful(true);
          reset();
        },
        (error) => {
          setLoading(false);
          setSuccessful(false);
          setIsErr(true);
          console.log("Failed to send email.", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact mb-10" id="contact">
        <div className="container">
          <h1>Connect With Me</h1>

          <div className="socials">
            <a
              href="https://github.com/elishaadamu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/elisha-adamu-505552134/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
              <span>Linkedin</span>
            </a>

            <a
              href="https://x.com/elisha_inuwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
              <span>X</span>
            </a>
          </div>

          <div className="fun">
            <h3>Start a project</h3>
            <p>
              Interested in working together? We should queue up a time to chat,
              <br /> I'll buy the coffee🤭️🤫️.
            </p>
            <label className="fun-btn" htmlFor="name">
              🤘Lets do this
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
