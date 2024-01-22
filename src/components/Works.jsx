import {Tilt}  from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'

const ProjectCard = ({index,name,tags,description,image,source_code_link}) =>{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} 
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={()=> window.open(source_code_link,"_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img src={github} alt="github" 
              classname='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className={`${styles.heroSubText}`}>{name}</h3>
          <p>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className= ' mt-3 text-secondary max-w-5xl text-[17px] text-center items-center  leading-[30px]'
        >
            Following are my projects on which i have worked on . These projects are very briefly explained along with their github links and the technologies used in them.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}/>

          
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works,"");