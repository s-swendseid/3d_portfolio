import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* tilt options for each card */}
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 obejct-contain" />
          <h3 className="text-20px font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px]  leading-[30px]"
      >
        I'm an aspiring frontend developer with experience in React and Vue.js.
        In my dynamic journey, I leveraged my two years at Montana State
        University to build a foundational understanding of computer science.
        Furthering my commitment to growth, I completed the Meta Front-End
        Developer Professional Certificate in just a month and a half,
        showcasing my dedication to rapid skill acquisition. Notably, during my
        first internship, I self-taught myself HTML and CSS, showcasing my
        commitment during my first internship with Cafeteros de la Montaña,
        which lead to my interest in Computer Science. In my role as the lead
        End-to-End Test Intern, I managed and optimized over 200 tests, ensuring
        the software's integrity. This foundation paved the way for leadership
        which became instrumental in leading the redesign of Foundant
        Technologies' product. These experiences, coupled with my formal
        education, reflect my versatility and passion for delivering impactful
        results in collaborative team environments.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
