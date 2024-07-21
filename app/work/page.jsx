"use client"

import { motion } from "framer-motion"
import React, {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import  'swiper/css';

import {BsArrowUpRight, BsGithub, BsGitlab} from 'react-icons/bs'

import {
  Tooltip, TooltipContent, 
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num:'01',
    category: 'Full-Stack Development',
    title: "Bookoholic",
    description: "An e-commerce website using MERN stack",
    techStack: [{name:"ReactJs"}, {name:"NodeJs"}, {name:"ExpressJs"}, {name:"MongoDB"}],
    image: "/assets/projects/bookoholic.png",
    live: "",
    github: "",
  },
  {
    num:'02',
    category: 'Real Time software',
    title: "Virtual vibe",
    description: "It is an online video calling app made using Zegocloud",
    techStack: [{name:"ReactJs"}, {name:"Zegocloud"}],
    image: "/assets/projects/virtualvibe.png",
    live: "",
    github: "",
  },
  {
    num:'03',
    category: 'Frontend Development',
    title: "Portfolio",
    description: "It is a portfolio website made using NextJs",
    techStack: [{name:"NextJs"}, {name:"Tailwind"}, {name:"Typescript"}],
    image: "/assets/projects/portfolio.png",
    live: "",
    github: "",
  },
  
]


const Work = () => {
  const [project, setProject]= useState(projects[0]);

  const handleSlideChange= (swiper)  =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity:0}}
                    animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}}
                    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
                      xl:justify-between xl:order-1  order-1 xl:oredr-none">
                        
                    <div className="flex flex-col gap-[30px] h-[50%] ">
                      <div className="text-8xl leading-none font-extrabold text-outline">
                        {project.num}
                      </div>
                      <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                      <p className="text-white/60">
                          {project.description}
                      </p>

                      <ul className="flex gap-4 ">
                        {project.techStack.map((item,index)=>{
                          return <li key={index} 
                            className="text-xl text-accent">{item.name}
                            {index !==project.techStack.length-1 && ","}
                            </li>
                        })}
                      </ul>

                      <div className="border border-white/20"></div>

                      <div className="flex items-center gap-4">

                        <Link href={project.live}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                              bg-white/5 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />

                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>

                        <Link href={project.github}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                              bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-3xl group-hover:text-accent" />

                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Github repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>

                      </div>

                    </div>
                  </div>
              <div className="w-full xl:w-[50%]">
                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                  >
                  {projects.map((project, index)=>{
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center
                      bg-pink-50/20">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full ">
                          <Image src={project.image} fill className="object-cover"  alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}

                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-purple-500 hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>

                </Swiper>
              </div>
            </div>
          </div>
    </motion.section>
  )
}

export default Work