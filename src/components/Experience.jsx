import { content } from "../Content";
import { useMediaQuery } from 'react-responsive';
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";

const Experience = () => {
  const { Experience } = content;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const experienceElement = document.getElementById("experience");

    if (experienceElement) {
      experienceElement.classList.add("animate-from-right");
    }

    return () => {
      if (experienceElement) {
        experienceElement.classList.remove("animate-from-right");
      }
    };
  }, []);

  return (
    <section className="bg-slate-200" id="experience">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h4 className="subtitle" data-aos="fade-down">
            {Experience.title}
          </h4>
          <br />
        </div>
        <div className={`flex ${isMobile ? 'flex-col' : 'items-center lg:flex-row'} gap-5`}>
          {/* Experience Section */}
          <div className="flex-1 max-w-[45vw] min-w-[22rem]" data-aos="fade-right">
            <h3 className="font-bold text-lg mb-4">Experience</h3>
            {/* Replace with your experience content */}
            <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
              {/* Example content */}
              <h5 className="font-bold font-Poppins">Example Experience</h5>
              <button className="font-bold text-gray self-end">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
