import { content } from "../Content";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS


const Aboutme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      mirror: true
    });
  }, []);
  
  const { Aboutme } = content;
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

  return (
    <section id="about me" className="bg-slate-200 mx-auto">
      <div className="container px-5 pt-14">
        <h4 className={`subtitle text-center md:text-left ${isMobile ? 'text-center' : ''}`}>
          {Aboutme.subtitle}
        </h4>

        <br />

        <div className={`flex flex-col md:flex-row items-center ${isMobile ? 'justify-center' : 'justify-start'}`}>
          {/* Image */}
          <img
            src={Aboutme.image1}
            alt="..."
            data-aos="fade-right"
            data-duration="1000"
            className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 object-cover"
          />

          {/* Text Content */}
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0 md:align-middle text-center md:text-left ">
            <div data-aos="fade-up" className="mx-4">
              <h4 className="subtitle" data-aos="fade-down">
                I'm {Aboutme.name}
              </h4>
            </div>
            <div
              data-aos="fade-left "
              className="bg-white border-2 border-dark_primary max-w-xl mx-4 p-6 shadow-sm rounded-xl rounded-br-[8rem] my-6"
            >
              <p className="leading-7" data-aos="fade-right" >{Aboutme.para}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
