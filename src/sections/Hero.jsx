import meImage from "../assets/images/me.jpg";
import { BiSolidDownload } from "react-icons/bi";
import resume from "../assets/Frontend_developer.pdf";

const Hero = ({id}) => {
  const handleDownloadResume = () => {
    const resumeFilePath = resume;
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "reactjs_developer.pdf";
    link.click();
  };
  return (
    <section
      id={id}
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Frontend Developer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Hi, I&apos;m Abhishek Yadav. A passionate Front-end Developer based in Mumbai, India. 📍

        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
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
