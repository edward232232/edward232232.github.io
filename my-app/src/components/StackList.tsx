import React from "react";
import { motion } from "framer-motion";
import { Tech, TechImg, TechName } from "./About/AboutElements"; // replace with your actual imports

interface TechnologiesProps {
  stackList?: {
    frontend?: Stack[];
    backend?: Stack[];
    infrastructure?: Stack[];
    certs?: Stack[];
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
 

    <motion.div variants={fadeIn("right", "spring", .5, 2)}>
    <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-20 mt-10 justify-center">
        {stackList?.certs?.map((stack: Stack, index: number) => (
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

    <motion.div variants={fadeIn("left", "spring", .5, 2)}>
      <div>
        <div className="flex">
          {stackList?.frontend?.map((stack: Stack, index: number) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </div>

      <div>
        <div className="flex">
          {stackList?.backend?.map((stack: Stack, index: number) => (
            <Tech className="tech">
              <TechImg src={stack.img} alt={stack.name} />
              <TechName>{stack.name}</TechName>
            </Tech>
          ))}
        </div>
      </div>

      <div>
        <div className="flex">
          {stackList?.infrastructure?.map((stack: Stack, index: number) => (
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
