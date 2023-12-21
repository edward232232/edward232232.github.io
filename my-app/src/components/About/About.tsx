import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import Technologies from "../StackList";
import { stackList } from "../../constants";

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

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText} text-center`}>
          Certifications:
        </h2>
      </motion.div>

      <Technologies
        stackList={{ certs: stackList.certs }}
        styles={styles}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />
    </div>
  );
};

export default SectionWrapper(About, "about");
