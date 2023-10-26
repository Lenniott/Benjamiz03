import { motion } from "framer-motion";
import { ExperienceTimeline } from "../components";

export function Experience() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container relative gap-2 mx-auto flex flex-col lg:flex-row "
      >
        <ExperienceTimeline />
      </motion.div>
    </div>
  );
}
