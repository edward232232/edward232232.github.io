import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="object-contain w-16 h-16" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

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
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
