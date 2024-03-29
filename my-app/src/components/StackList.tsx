import React from "react";
import { motion } from "framer-motion";
import { Tech, TechImg, TechName } from "../styles/AboutElements"; // replace with your actual imports

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

const StackList: React.FC<TechnologiesProps> = ({
  stackList,

  fadeIn,
}) => (
  <div>
    <motion.div variants={fadeIn("right", "spring", 0.5, 2)}>
      <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-20 mt-10 justify-center">
        {stackList?.certs?.map((stack: Stack, index: number) => (
          <div style={{ flex: "1 0 5%", margin: "5px" }} key={index}>
            <Tech className="flex-wrap">
              <TechImg
                style={{ maxWidth: "100%", height: "auto" }}
                src={stack.img}
                alt={stack.name}
              />
              <TechName>{stack.name}</TechName>
            </Tech>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div variants={fadeIn("left", "spring", 0.5, 2)}>
      <div>
        <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-20 mt-10 justify-center">
          {stackList?.frontend?.map((stack: Stack, index: number) => (
            <div style={{ flex: "1 0 5%", margin: "5px" }} key={index}>
              <Tech className="flex-wrap">
                <TechImg
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={stack.img}
                  alt={stack.name}
                />
                <TechName>{stack.name}</TechName>
              </Tech>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-20 mt-10 justify-center">
          {stackList?.backend?.map((stack: Stack, index: number) => (
            <div style={{ flex: "1 0 5%", margin: "5px" }} key={index}>
              <Tech className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {stackList?.infrastructure?.map((stack: Stack, index: number) => (
            <div style={{ flex: "1 0 20%", margin: "5px" }} key={index}>
              <Tech className="flex-wrap">
                <TechImg
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={stack.img}
                  alt={stack.name}
                />
                <TechName>{stack.name}</TechName>
              </Tech>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default StackList;
