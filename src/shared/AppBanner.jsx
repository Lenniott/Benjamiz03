import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import homePageImage from "../images/homePage";
import { Link } from "react-router-dom";

export function AppBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark uppercase"
        >
          Hi👋🏽, I'm Benjamin
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-2 mb-1 text-lg md:text-lg lg:text-xl xl:text-xl text-center sm:text-left leading-normal text-slate-700"
        >
          Product designer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-light mt-0 text-md md:text-md lg:text-md xl:text-md text-center sm:text-left leading-normal text-slate-700"
        >
          Building value through simple design
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <Link
            to="/experience"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500"
            aria-label="Download Resume"
          >
            <FiBriefcase className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiBriefcase>
            <span className="text-sm sm:text-lg duration-100">Work Experience</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="relative w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 "
      >
        <div  className="hover:translate-y-0.5 hover:scale-105 grayscale hover:grayscale-0  duration-500 ">
        <Link to="/about" aria-label="Learn more about me">
          <img
            className="relative rounded-lg"
            src={homePageImage.hero}
            alt="Product designer"
            width={700}
            height={700}
          />
        </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
