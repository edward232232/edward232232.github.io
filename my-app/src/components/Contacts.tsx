import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import DeskWithMe from "../assets/personal/me3.jpeg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="-mt-[8rem] flex flex-col-reverse md:flex-row gap-10 overflow-hidden justify-center items-center min-h-screen">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 mt-10">
          <a
            href="https://www.linkedin.com/in/eddie-k-7a88514b/"
            className="Linkedin profile mb-4 sm:mb-0 sm:mr-4"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
              <span>LinkedIn</span>
            </div>
          </a>
          <a
            href="mailto:kong.eddie.com"
            className="email social mb-4 sm:mb-0 sm:mr-4"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <span>Email</span>
            </div>
          </a>
          <a href="https://github.com/edward232232" className="facebook social">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGithub} size="3x" />
              <span>GitHub</span>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center mt-10">
          <img
            className="h-[40vh] shadow-2xl rounded-lg border-gray border-8"
            src={DeskWithMe}
            alt="DeskWithMe"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <a
            href="mailto:Kong.eddie@gmail.com"
            className="text-center text-blue-500 underline"
          >
            EMAIL: kong.eddie@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
