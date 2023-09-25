import meImage from "../assets/images/me.jpg";
import { BiSolidDownload } from "react-icons/bi";

const Hero = ({ id }) => {
  const resumeLink = "./Frontend_developer.pdf";
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Frontend_developer.pdf";
    link.click();
  };
  return (
    <section
      id={id}
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold text-gray-700">
          Frontend Developer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-lg mb-4 info-text font-medium text-gray-500">
          Hi, I&apos;m Abhishek Yadav. A passionate Front-end Developer with 4
          years of professional experience in Web Designing and User Interface
          Development. Proficiency in code optimization to improve performance.
        </p>

        <div className="mt-11">
          <button className="btn third" onClick={handleDownloadResume}>
            <span className="github-text">Resume</span>
            <span className="github-icon">
              <BiSolidDownload size={20} />
            </span>{" "}
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center hero-image">
        <img
          src={meImage}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
