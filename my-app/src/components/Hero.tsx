import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import DeskWithMe from "../assets/personal/MeWithDesk.jpeg";
import Type from "./Type";

const Profile = () => {
  return (
    <>
      <section className="relative flex flex-col w-full h-screen mx-auto overflow-hidden sm:flex-row sm:bg-[#FCFEFF] bg-hero-mobile">
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
              <span
                role="img"
                aria-labelledby="wave"
                title="Wave"
                className={styles.waveEmoji2}
              >
                👋🏻
              </span>
            </h1>

            <h1 className={styles.sectionHeadText}>
              I'M <span style={styles.purpleText}>Eddie Kong</span>
            </h1>

            <div style={styles.blueDiv}>
              <Type />
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 mb-1 rounded-full bg-taupe"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-[100px] right-0 h-[500px]"
            src={DeskWithMe}
            alt="DeskWithMe"
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
