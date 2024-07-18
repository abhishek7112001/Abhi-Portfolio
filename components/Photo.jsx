"use client";

import { motion } from "framer-motion"
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div initial={{opacity:0}} animate={{opacity:1,
            transition: {delay:1, duration:0.2, ease:'easeIn'},
        }}>
            <motion.div 
            initial={{opacity:0}} animate={{opacity:1,
              transition: {delay:2.4, duration:0.4, ease:'easeInOut'},
          }}
            className="w-[298px] h-[298px]
                mix-blend-lighten">
                <Image src="/assets/profile.png" priority quality={100} fill
                alt="profile pic" className="object-contain"/>
            </motion.div>
            <motion.svg>
              <motion.circle />
            </motion.svg>
        </motion.div>

    </div>
  )
}

export default Photo