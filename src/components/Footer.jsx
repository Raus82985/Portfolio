import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer bg-slate-200 p-3">
      <div className="socialMedia flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/_raushan_jaiswal_/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-600 transition duration-300">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006845808774" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/raushan-kumar-a7b646266//" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Raus82985" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition duration-300">
          <FaGithub size={30} />
        </a>  
      </div>
      <div className="flex justify-center">
        <p className="text-black"> &copy; Raushan Kumar</p>
      </div>
    </div>
    );
};

export default Footer;
