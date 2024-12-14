import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import wwwIcon from "../assets/icon/www.svg"
import githubIcon from "../assets/icon/github.svg"
import { projects, technologyIcons } from "../constants/project"

const Project = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Project</h2>
        <h2 className="text-xl  mb-6 text-blue">
          Each project is a unique piece of development 🧩
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    aria-label={project.title}
                    className="w-[300px] h-[300px] rounded-lg shadow-lg object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-xl font-semibold mb-2 text-slate-600">
                    {project.title}
                  </h2>
                  <p className="text-lg mb-4 info-text font-medium text-gray-500">
                    {project.description}
                  </p>

                  <div className="flex mb-4">
                    <div className="mr-2">
                      <div className="flex items-center mb-4">
                        <strong className="mr-2 text-coral-red text-red-600">
                          Technology:
                        </strong>
                        {project.technology.map((tech, index) => (
                          <img
                            loading="lazy"
                            key={index}
                            src={technologyIcons[tech]}
                            alt={tech}
                            aria-label={tech}
                            className="w-6 h-6 inline-block mr-1 sm:w-4 sm:h-4 md:w-9 md:h-9 lg:w-12 lg:h-12"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-900 transition-colors duration-300"
                    >
                      <span className="mr-2 text-gray-200">Code</span>
                      <img
                        src={githubIcon}
                        alt="GitHub Icon"
                        aria-label="GitHub Icon"
                        className="w-6 h-6 inline-block"
                      />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-green-700 text-white rounded-xl hover:bg-green-900 transition-colors duration-300 ml-2"
                    >
                      <span className="mr-2 text-gray-200">Live demo</span>
                      <img
                        src={wwwIcon}
                        alt="Demo Icon"
                        aria-label="Demo Icon"
                        className="w-6 h-6 inline-block"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Project
