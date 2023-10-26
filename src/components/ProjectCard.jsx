import { motion } from "framer-motion";

export function ProjectCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        to="/works/[id]"
        as={"/projects/" + props.id}
        aria-label={props.title}
        passHref
      >
        <div className="w-fit h-full rounded-xl shadow-lg grayscale hover:grayscale-0 hover:shadow-xl  hover:translate-y-0.5 hover:scale-105 cursor-pointer mb-10 sm:mb-0 bg-secondary-light duration-500">
          <span className='overflow-hidden w-72 h-72 flex items-center justify-center rounded-md'>
            <img
                src={props.img}
                className="w-full rounded-t-xl border-none"
                alt={props.title}
              />
          </span>
          <div className="text-center px-4 py-6 w-72 h-32 flex items-center justify-center">
            <h2 className="font-general-medium text-md md:text-lg text-ternary-dark dark:text-ternary-light mb-2 break-normal">
            {props.title}
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
