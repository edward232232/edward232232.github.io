import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { styles } from "../styles/styles";
// import { navLinks } from "../constants";
import DeskWithMe from "../assets/personal/me3.jpeg";
import Type from "./Type";
import styled, { keyframes } from "styled-components";
import { swing } from "react-animations";
import Contacts from "./Contacts";

const ShakeAnimation = keyframes`${swing}`;
const ShakingDiv = styled.div`
  animation: 3s ${ShakeAnimation} infinite;
  transform-origin: 5% 0;
`;

const Profile = () => {
  return (
    <>
      bg-gradient-to-b from-green-300 via-blue-500 to-purple-600
      <section className="relative flex flex-col w-full h-[95vh] mx-auto overflow-hidden sm:flex-row ">
        {" "}
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col items-center justify-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 h-40 sm:h-80 bw-gradient sm:hidden" />
          </div>

          <div className={styles.typeStyle}>
            <h1 className={styles.sectionHeadText}>
              Hi There!{" "}
              <ShakingDiv>
                <span role="img" aria-labelledby="wave" title="Wave">
                  👋🏻
                </span>
              </ShakingDiv>
            </h1>

            <h1 className={styles.sectionHeadText}>
              I'M <span style={{ color: "blue" }}>Eddie Kong</span>
            </h1>

            <div className={styles.blueText}>
              <Type />
            </div>
          </div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>
        <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-28">
          <a
            href="#about"
            className="flex flex-col items-center justify-center"
          >
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
      border-gray-300 flex
      justify-center items-center p-2"
            >
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
            <p className="text-sm text-center text-gray-500">
              Scroll down to see more
            </p>
          </a>
        </div>
        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-[20vh] right-[10vw] h-[50vh] shadow-2xl rounded-full border-gray border-8"
            src={DeskWithMe}
            alt="DeskWithMe"
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
