import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";

import { styles } from "../styles/styles";
import { fadeIn, textVariant } from "../utils/motion";
import Technologies from "./StackList";
import { stackList } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
      <h2 className={`${styles.sectionHeadText} text-center`}>
       Technologies.</h2>
      </motion.div>

    
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionSubText} mb-1`}>FrontEnd:</h2>
      </motion.div>
      <Technologies
      
        stackList={{
          frontend: stackList.frontend,
        }}
        styles={styles}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />
       <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionSubText} mb-1`}>Backend:</h2>
      </motion.div>
      <Technologies
      
        stackList={{
          backend: stackList.backend,
        }}
        styles={styles}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />

<motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionSubText} mb-1`}>DevOps/Cloud& Tools:</h2>
      </motion.div>
      <Technologies
      
        stackList={{
          infrastructure: stackList.infrastructure,
        }}
        styles={styles}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />
    </>
  );
};

export default SectionWrapper(Tech, "");
