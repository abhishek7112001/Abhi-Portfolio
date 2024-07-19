import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import './globals.css'
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-5 xl:pb-20 ">

          <div className="xl:ml-20 order-1 xl:order-none">
            <Photo />
          </div> 
          
          <div className="text-center xl:text-left gap-3 order-2 xl:order-none">
            <span className="text-xl xl:ml-10" >Software Developer</span>
            <h1 className="h1 xl:ml-10">
              Hello I'm <br /> <span className="text-accent">Abhishek kumar</span>
            </h1>
            <p className="xl:ml-10 mb-7">I specialize in creating seamless digital experiences <br /> and have expertise in multiple programming languages and technologies.
            </p>

            <div className="xl:ml-10 flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase 
                      flex items-center gap-1 px-4">
                <a href="/assets/resume.pdf" download>
                  Download CV 
                </a>
                  <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9
                  border border-white rounded flex justify-center items-center
                  text-white text-base hover:bg-white hover:text-black hover:transition
                  -all duration-500"/>
              </div>
            </div>
          </div>  
        </div> 
      </div>
      <Stats />
    </section>
  )
}

export default Home