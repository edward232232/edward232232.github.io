import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { stackList } from "./stacklist";
import { Tech, TechImg, TechName } from "./AboutElements";

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mb-20"
      >
        Dedicated professional with over 15 years of experience in Applications,
        DevOps/ Cloud, seeking opportunities in software engineering or DevOps
        support roles. Proficient in troubleshooting, automation, and cloud
        technologies. Passionate about continuous learning new technologies and
        contributing to innovative solutions.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mb-20"
      >
        Certifications: Azure AZ-900 and AI-900, AWS Cloud Practitioner 2017, MS
        Professional Developer MCPD2012, MCSA, ITIL v3, Comptia A+
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <motion.div variants={fadeIn("right", "spring", 1, 0.75)}>
        <div className="flex flex-wrap gap-10 mt-10">
          {stackList.map((stack, index) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(About, "about");
