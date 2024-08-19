import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { useMediaQuery } from 'react-responsive';
import "swiper/css";
import "swiper/css/pagination";

const Experience = () => {
  const { Experience } = content;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [modalContent, setModalContent] = useState(null);
  const [modalLink, setModalLink] = useState(null);

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

  const openModal = (content, link) => {
    setModalContent(content);
    setModalLink(link);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalLink(null);
  };

  return (
    <section className="bg-slate-200" id="experience">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h4 className={`subtitle ${isMobile ? 'text-center' : ''}`} >
            {Experience.title}
          </h4>
        </div>

        <div className="space-y-8">
          {/* Research Section */}
          <div >
            <h3 className="font-bold text-xl mb-10 text-center underline ">{Experience.Research.Research_title}</h3>
            <div className={`grid ${window.innerWidth<1025?"grid-cols-1":'grid-cols-2'} mx-auto`}>
              {Experience.Research.research_content.map((research, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl p-5 mx-auto mb-5 border-b-8 border-[#FAF9FD] h-fit ${isMobile?'w-fill mx-5':"w-96"} text-center`}
                  data-aos="fade-down"
                >
                  <h5 className="font-bold font-Poppins">{research.publication}</h5>
                  <button
                    className="font-bold text-gray self-end mt-2"
                    onClick={() => openModal(research.para, research.link)}
                  >
                    READ MORE
                  </button>

                </div>
              ))}

            </div>
            <p className="text-right text-xs text-slate-400">Yet to Publish</p>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className={`font-bold mb-6 text-center underline text-xl`}>Working Experience</h3>
            <div className={`grid grid-cols-1 gap-5 justify-center mb-10`}>
              {Experience.Experience_content.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit ${isMobile?"mx-5":'mx-20'}`}
                  data-aos="fade-down"
                >
                  <h4 className="font-bold font-Poppins text-xl text-center mb-4">{exp.Experience}</h4>
                  <p className="mb-4">
                    <span className="font-bold">Roal: - </span>
                    <span className="italic">{exp.Roal}</span>
                  </p>
                  <ul className="mb-5">
                    <li className="mb-4"> {exp.para1}</li>
                    <li className="mb-4">{exp.para2}</li>
                    <li className="mb-4">{exp.para3 && <p>{exp.para3}</p>}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Read More */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg w-11/12 md:w-1/2 text-center">
            <h5 className="font-bold text-lg mb-4">Details</h5>
            <p>{modalContent}</p>
            {modalLink && (
              <a
                href={modalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Paper
              </a>
            )}
            <br />
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
