import React from 'react';
import { content } from '../Content';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { SiPython } from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';


const Skills = () => {
  const { skills } = content;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Create a mapping from skill names to React Icons
  const iconMapping = {
    'HTML 5': <FaHtml5 />,
    'CSS 3': <FaCss3 />,
    'Java Script': <FaJs />,
    'React js': <FaReact />,
    'Node js': <FaNodeJs />,
    'Express js': <FaNodeJs />, // Placeholder, Express doesn't have a specific icon
    'Redux': <FaReact />, // Placeholder, Redux doesn't have a specific icon
    'SQL': <DiMysql />,
    'Mongo DB': <DiMongodb />,
    'Python': <SiPython />,
  };

  return (
    <section className="min-h-fit bg-white" id="skills">
      {/* content */}
      <div className="md:container px-5 py-14">
        <h4 className={`subtitle ${isMobile?'text-center':''}`} data-aos="fade-down">
          {skills.title}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-slate-200 sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                {/* Display the icon based on the skill name */}
                <div className="text-3xl">
                  {iconMapping[skill.name]}
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <h6 className="flex justify-between">
                    <span>{skill.name}</span>
                    <span >{skill.percentage}%</span>
                  </h6>                </div>
                {/* Display the percentage bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full absolute"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div
                      className="absolute h-4 w-4 bg-blue-500 border-2 border-white rounded-full"
                      style={{ right: 0, top: '-0.200rem' }} // Adjust top value as needed to center vertically
                    ></div>
                  </div>
                  <div className="bg-white h-2.5 rounded-full mt-2 w-full"></div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
