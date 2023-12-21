// Technologies.tsx
import React from "react";
import { motion } from "framer-motion";
import { Tech, TechImg, TechName } from "./AboutElements"; // replace with your actual imports

interface TechnologiesProps {
  stackList: {
    frontend: Stack[];
    backend: Stack[];
    infrastructure: Stack[];
    certs: Stack[];
  };
  styles: any; // replace with the actual type of your styles
  textVariant: any; // replace with the actual type of your textVariant function
  fadeIn: any; // replace with the actual type of your fadeIn function
}
interface Stack {
  img: string;
  name: string;
}

const Technologies: React.FC<TechnologiesProps> = ({
  stackList,
  styles,
  textVariant,
  fadeIn,
}) => (
  <div>
    <motion.div variants={textVariant()}>
    <h2 className={`${styles.sectionSubText} text-center`}> {/* Add text-center */}

        Certifications:
      </h2>
    </motion.div>

    <motion.div variants={fadeIn("right", "spring", 1, 1)}>
      <div className="flex flex-wrap gap-20 mt-10 justify-center mb-10">
        {stackList.certs.map((stack: Stack, index: number) => (
          <Tech className="tech">
            <TechImg
              style={{ width: "100px", height: "100px" }}
              src={stack.img}
              alt={stack.name}
            />
            <TechName>{stack.name}</TechName>
          </Tech>
        ))}
      </div>
    </motion.div>

    <motion.div variants={fadeIn("left", "spring", 1, 3)}>
      <div>
        <h2 className={styles.sectionSubText}>Frontend:</h2>
        <div className="flex">
          {stackList.frontend.map((stack: Stack, index: number) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </div>

      <div>
        <h2 className={styles.sectionSubText}>Backend:</h2>
        <div className="flex">
          {stackList.backend.map((stack: Stack, index: number) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </div>

      <div>
        <h2 className={styles.sectionSubText}>Infrastructure:</h2>
        <div className="flex">
          {stackList.infrastructure.map((stack: Stack, index: number) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default Technologies;
