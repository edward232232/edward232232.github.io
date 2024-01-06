import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden justify-center items-center min-h-screen"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <div className="flex justify-center items-center space-x-16 mt-10">
          <a
            href="https://www.linkedin.com/in/eddie-k-7a88514b/"
            className="Linkedin profile"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
              <span>LinkedIn</span>
            </div>
          </a>
          <a href="mailto:kong.eddie.com" className="email social">
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
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
