import { motion } from "framer-motion";
import { desVariants , tagVariants , titleVariants } from "@/utils/animation";

const AboutSection = () => {
  return (
    <div className="  container mx-auto py-12 xl:py-24 h-[auto]">
        <div className=" grid lg:grid-cols-2 items-center">
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
            >
                <img 
                    src="/src/assets/image/aboutfront.png" alt=""
                    width={900}
                    height={500}
                    className="max-md:hidden "
                 />
            </motion.div>

            <div className=" items-center flex flex-col ">
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                className="px-12 py-4 max-sm:text-center text-3xl font-extrabold leading-tight lg:text-4xl"
                >
                    We Are An Awards Winning Company
                </motion.h2>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                className="px-12 tracking-wider uppercase text-gray-400 mb-3"
                >
                    World Award
                </motion.p>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 py-4 "
                >
                This is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.
                </motion.p>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 py-4 "
                >
                This is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection