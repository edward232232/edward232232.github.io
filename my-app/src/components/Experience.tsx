import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles/styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";

type Experience = {
  date: string;
  title: string;
  company_name: string;
  iconBg: string;
  icon: string;
  description: string;
  // Add other properties here
};
const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.3) 0px 30px 40px -3px, rgba(0, 0, 0, 0.2) 0px 10px 15px -2px",
      borderRadius: "30px",
      border: "3px solid black",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        {experience.description}
      </p>
    </div>
  </VerticalTimelineElement>
);

const ExperienceComponent = () => {
  return (
    <>
      <h2 className={styles.sectionHeadTextLight}>Professional Experience.</h2>

      <motion.div
        variants={textVariant()}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "custom-blue",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={resume}
                  alt="resume ME"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
                sm:text-[18px] text-[14px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-3 pr-3 
                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1f9YQB0FydJPCLzNeP1LzbMc4XPgAcbr8/view?usp=sharing", //paste the link to your resume here
                  "_blank"
                )
              }
              onMouseOver={() => {
                const downloadBtn = document.querySelector(".download-btn");
                if (downloadBtn) {
                  downloadBtn.setAttribute("src", downloadHover);
                }
              }}
              onMouseOut={() => {
                const downloadBtn = document.querySelector(".download-btn");
                if (downloadBtn) {
                  downloadBtn.setAttribute("src", downloadHover);
                }
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceComponent, "work");
