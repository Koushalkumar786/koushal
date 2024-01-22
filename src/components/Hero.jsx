import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import Typed from "react-typed"
const Hero = () => {
  

  return (
    <section className=" relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          
        <div className="w-5 h-5 rounded-full bg-[#911eef]"/>
        <div className="w-1 h-40 sm:h-80  violet-gradient"/>
        </div>
        <div><h1 className={`${styles.heroHeadText} animated-typing`}>
          Hey! I Am <span></span>
          <Typed strings={[" Koushal "," Kumar"]}
          typeSpeed={200}
          smartBackspace={200}
          backSpeed={150}
          loop
          className="text-[#b87bea]"
          >
          </Typed>
        
        </h1>
        <p className={`${styles.heroSubText}  mt-2 text-white-100`}> I am a frontend devloper . I have <br className="sm:block hidden" />developed various applications.</p>
        
        </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
        
       </a>
      </div>
    </section>
  )
}

export default Hero