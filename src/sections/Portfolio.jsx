import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meImage from "../assets/images/threads.png";

import htmlIcon from "../assets/icon/html.svg";
import cssIcon from "../assets/icon/css.svg";
import tailwindIcon from "../assets/icon/tailwind.svg";
import jsIcon from "../assets/icon/js.svg";
import tsIcon from "../assets/icon/ts.svg";
import reactIcon from "../assets/icon/react.svg";
import nextjsIcon from "../assets/icon/nextjs.svg";
import reduxIcon from "../assets/icon/redux.svg";
import mongoDBIcon from "../assets/icon/mongoDB.svg";
import gitIcon from "../assets/icon/git.svg";
import wwwIcon from "../assets/icon/www.svg";
import githubIcon from "../assets/icon/github.svg";

const projects = [
  {
    title: "Threads-clone",
    image: meImage,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Redux",
      "MongoDB",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },
  {
    title: "Threads-clone",
    image: meImage,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Redux",
      "MongoDB",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },
  {
    title: "Threads-clone",
    image: meImage,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Redux",
      "MongoDB",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },
];

const technologyIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  Tailwind: tailwindIcon,
  JavaScript: jsIcon,
  TypeScript: tsIcon,
  React: reactIcon,
  Nextjs: nextjsIcon,
  Redux: reduxIcon,
  MongoDB: mongoDBIcon,
  Git: gitIcon,
};

const Portfolio = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Project</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img
                    src={meImage}
                    alt={project.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-xl font-semibold mb-2 text-slate-600">
                    {project.title}
                  </h2>
                  <p className="text-lg mb-4 info-text">
                    {project.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-2">
                      <div className="flex items-center mb-4">
                        <strong className="mr-2 text-coral-red">
                          Technology:
                        </strong>
                        {project.technology.map((tech, index) => (
                          <img
                            key={index}
                            src={technologyIcons[tech]}
                            alt={tech}
                            className="w-8 h-8 inline-block mr-1 sm:w-5 sm:h-5 md:w-9 md:h-9 lg:w-12 lg:h-12"
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
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300"
                    >
                      <span className="mr-2">Code</span>
                      <img
                        src={githubIcon}
                        alt="GitHub Icon"
                        className="w-6 h-6 inline-block"
                      />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 ml-2"
                    >
                      <span className="mr-2">Live demo</span>
                      <img
                        src={wwwIcon}
                        alt="Demo Icon"
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
  );
};

export default Portfolio;
