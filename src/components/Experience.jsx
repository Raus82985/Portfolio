import { content } from "../Content";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";


const Experience = () => {
  const { Experience } = content;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const experienceElement = document.getElementById("experience");
    const educationElement = document.getElementById("education");

    if (experienceElement && educationElement) {
      experienceElement.classList.add("animate-from-right");
      educationElement.classList.add("animate-from-left");
    }

    return () => {
      if (experienceElement && educationElement) {
        experienceElement.classList.remove("animate-from-right");
        educationElement.classList.remove("animate-from-left");
      }
    };
  }, []);

  return (
    <section className="bg-slate-200" id="experience">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Experience.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Experience.subtitle}
          </h4>
          <br />
        </div>
        <div className={`flex ${isMobile ? 'flex-col-reverse' : 'items-center lg:flex-row'} gap-5`}>
          {/* Experience Section */}
          <div id="experience" className={`${isMobile ? 'order-2' : 'order-1'} flex-1 max-w-[45vw] min-w-[22rem]`} data-aos="fade-right">
            <h3 className="font-bold text-lg mb-4">Experience</h3>
            {/* Replace with your experience content */}
            <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
              {/* Example content */}
              <h5 className="font-bold font-Poppins">Example Experience</h5>
              <button className="font-bold text-gray self-end">READ MORE</button>
            </div>
          </div>

          {/* Education Section */}
          <div id="education" className={`${isMobile ? 'order-1' : 'order-2'} flex-1 max-w-[45vw] min-w-[22rem]`} data-aos="fade-left">
            <h3 className="font-bold text-lg mb-4">Education</h3>
            {/* Replace with your education content */}
            <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
              {/* Example content */}
              <h5 className="font-bold font-Poppins">Example Education</h5>
              <button className="font-bold text-gray self-end">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
