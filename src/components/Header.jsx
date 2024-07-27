import { content } from "../Content";
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

Modal.setAppElement('#root');

const Project = () => {
  const { Project } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const items = Project.Project_content.map((content, i) => (
    <div
      key={i}
      onClick={() => openModal(content)}
      className="bg-slate-200 cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 transition-all duration-300 w-full sm:w-80 mx-auto"
    >
      <img src={content.img} alt={content.name} className="w-full h-80 object-cover" />
      <div className="p-5 text-center">
        <h5 className="text-lg font-bold">{content.name}</h5>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-5">
        <h4 className="text-2xl font-bold text-center mb-8">
          {Project.title}
        </h4>

        <div className="relative px-4 md:px-0">
          <AliceCarousel
            items={items}
            infinite
            disableButtonsControls
            mouseTracking
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
            className="custom-carousel"
          />
        </div>

        {selectedProject && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 flex items-center justify-center p-6 rounded-lg max-w-lg mx-auto bg-slate-600 shadow-lg z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-40"
          >
            <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-white w-full max-w-sm md:max-w-md">
              <h2 className="text-xl font-bold">{selectedProject.name}</h2>
              <img src={selectedProject.img} alt={selectedProject.name} className="h-40 w-auto rounded-md" />
              <p className="text-sm text-center">{selectedProject.about_project}</p>
              <a
                href={selectedProject.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
              <button onClick={closeModal} className="mt-4 bg-slate-600 text-white px-4 py-2 rounded-xl">
                Close
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Project;
