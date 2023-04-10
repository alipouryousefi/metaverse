"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
        voluptas nihil voluptates, nobis sit tempora quibusdam omnis cupiditate
        asperiores, laborum quo reprehenderit? Quos sit facilis ad eaque
        dignissimos quae?Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Explicabo aliquam delectus eius est pariatur? Eum eveniet ea
        accusamus unde obcaecati illo nostrum inventore voluptatem sapiente
        aspernatur, repudiandae commodi quam corrupti.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
