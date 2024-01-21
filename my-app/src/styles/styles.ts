const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-eerieBlack lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2",
  heroSubText:
    "text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    typeStyle: `
    color: black; 
    margin-top: 20px; 
    font-weight: bold; 
    font-size: 20px; 
    width: 1000px; 
    z-index: 1000;
    @media (max-width: 640px) {
      position: absolute;
      bottom: 0;
    }
  `,
  sectionHeadText:
    "text-eerieBlack font-black md:text-[30px] sm:text-[20px] xs:text-[10px] text-[30px] font-poppins",
  sectionHeadTextLight:
    "text-timberWolf font-black md:text-[60px] sm:text-[20px] xs:text-[10px] text-[30px] font-poppins",
  sectionSubText:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",
  sectionSubTextLight:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",

  strongStyle: "color: purple",

  blueText: "text-purple-900 mt-2 font-extrabold text-3xl w-[1200px]",

  purpleText: {
    color: "purple",
  },

 
 
};

export { styles };
