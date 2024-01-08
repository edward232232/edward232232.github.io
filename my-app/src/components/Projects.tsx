import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
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
      <div className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="object-contain w-32 h-32" />
        <h3 className="text-black text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
  
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px] mb-20"
      >
     Some of my repositories showcasing my skill and understanding of the technologies used.
      </motion.p>

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

export default SectionWrapper(Projects, "projects");
