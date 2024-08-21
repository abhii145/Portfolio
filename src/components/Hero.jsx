import meImage from "../assets/images/me.jpg"
import { BiSolidDownload } from "react-icons/bi"

const Hero = ({ id }) => {
  const resumeLink = "./Full_Stack_developer.pdf"

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = resumeLink
    link.download = "Abhishek_Full_Stack.pdf"
    link.click()
  }

  return (
    <section
      id={id}
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold text-gray-700">
          Full Stack Developer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-lg mb-4 info-text font-medium text-gray-500">
          Hi, I&apos;m Abhishek Yadav. A passionate Full Stack Developer with 5
          years of professional experience in building robust Full Stack web
          applications using the <b>MERN stack & Next.js</b>. I specialize in
          creating intuitive and visually engaging web applications, with a
          strong emphasis on optimizing code for enhanced performance
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
          alt="Abhishek Yadav"
          width={570}
          height={522}
          className="object-contain"
          loading="lazy" // Lazy load the image
          // Consider optimizing this image outside of React
        />
      </div>
    </section>
  )
}

export default Hero
