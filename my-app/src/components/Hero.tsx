import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import me4 from "../assets/personal/linkedin_me.png";
import Type from "./Type";
import styled, { keyframes } from "styled-components";
import { swing } from "react-animations";

const ShakeAnimation = keyframes`${swing}`;
const ShakingDiv = styled.div`
  display: inline-block;
  animation-name: ${ShakeAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transform-origin: 10% 900;
`;

const Profile = () => {
  return (
    <section className="relative flex flex-col w-full h-[95vh] mx-auto overflow-hidden sm:flex-row ">
      <div
        className={`absolute  top-[150px] 
        lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
        max-w-7xl mx-auto flex flex-row items-start
        justify-between gap-5 `}
      >
        <div className={`${styles.typeStyle} mt-4`}>
          <h1 className={styles.sectionHeadText}>
            Hi There!{" "}
            <ShakingDiv>
              <span role="img" aria-labelledby="wave" title="Wave">
                👋🏻
              </span>
            </ShakingDiv>
          </h1>

          <h1 className={styles.sectionHeadText}>
            I'M <span className="text-blue-400">Eddie Kong</span>
          </h1>

          <div className={styles.blueText}>
            <Type />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 hidden sm:flex items-center justify-center w-full">
        <a href="#about" className="flex flex-col items-center justify-center">
          <div className="w-[40px] h-[60px] rounded-3xl border-4 border-gray-100 flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [-4, 15, -4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={6}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
          <p className="text-lg text-center text-gray-400">
            Scroll down to see more
          </p>
        </a>
      </div>
      <div>
        <img
          className="absolute bottom-16 right-[5vw] h-[25vh] sm:h-[20vh] md:h-[60vh] shadow-2xl rounded-full border-gray border-4 object-cover"
          src={me4}
          alt="me4"
        />
      </div>
    </section>
  );
};

export default Profile;
