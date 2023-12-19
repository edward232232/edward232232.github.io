import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { stackList } from "./stacklist";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,

} from "./AboutElements";




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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </motion.p>

     
      <motion.div variants={textVariant()}>

      <h2 className={styles.sectionHeadText} >Technologies.</h2>

      </motion.div>
      <motion.div  variants={fadeIn("right", "spring", 1.5 , 0.75)}>
      <div className="flex flex-wrap gap-10 mt-10">
        {stackList.map((stack, index) => (
   
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
        
        ))}
       </div>
       </motion.div>

      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Projects.</p>
      </motion.div>
      <div className="flex flex-wrap gap-10 mt-10">
        {services.map((service, index) => (
          <a
            href={service.url}
            key={service.title}
            target="_blank"
            rel="noopener noreferrer"
            title={service.title}
          >
            <ServiceCard index={index} {...service} />
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
