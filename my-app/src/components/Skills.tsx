import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";

import { styles } from "../styles/styles";
import { fadeIn, textVariant } from "../utils/motion";
import StackList from "./StackList";
import { stackList } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
      <h2 className={styles.sectionHeadTextLight}>Tech Stack.</h2>
      </motion.div>

    
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionSubText} mb-1`}>FrontEnd:</h2>
      </motion.div>
      <StackList
      
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
      <StackList
      
        stackList={{
          backend: stackList.backend,
        }}
        styles={`${styles} flex flex-wrap`}
        textVariant={textVariant}
        fadeIn={fadeIn}
      />

<motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionSubText} mb-1`}>DevOps/Cloud& Tools:</h2>
      </motion.div>
      <StackList
      
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
