
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
        <div className="footer-left text-center lg:text-left flex-1">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="footer-right flex gap-4">
          <a
            href="https://github.com/abhii145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiy145/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
