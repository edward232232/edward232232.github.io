import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Stacklist from "./StackList";
import { stackList } from "../constants";

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Introduction</p>
        <h2 className={styles.sectionHeadTextLight}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px] mb-20"
      >
        Dedicated professional with over 15 years of
        experiencemaintaining/supporting Application and Cloud-Based Solutions.{" "}
        <br />
        <br />
        Proficient in troubleshooting, automation, and cloud technologies.
        Passionate about continuous learning new technologies and contributing
        to innovative solutions.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubTextLight}>Certifications:</h2>
      </motion.div>

      <Stacklist
        stackList={{ certs: stackList.certs }}
        styles={styles}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />
    </div>
  );
};

export default SectionWrapper(About, "about");
