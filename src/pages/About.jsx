import { motion } from "framer-motion";
import {AboutMeBio} from "../components";

export function About() {
  return (
    <div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>
    </div>
  );
}

