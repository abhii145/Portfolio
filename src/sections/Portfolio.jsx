import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import threads from "../assets/images/threads.png";
import festifind from "../assets/images/festifind.png";
import ecom from "../assets/images/ecom.png";
import htmlIcon from "../assets/icon/html.svg";
import awsS3Bucket from "../assets/icon/awsS3.svg";
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
import clerkIcon from "../assets/icon/clerk.svg";

const projects = [
  {
    title: "FestiFind",
    image: festifind,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Redux",
      "MongoDB",
      "awsS3Bucket",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },

  {
    title: "Threads-clone",
    image: threads,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Redux",
      "MongoDB",
      "Clerk",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },
  {
    title: "Ecommerce",
    image: ecom,
    description:
      "This project is a web-based ecommerce application that allows users to browse, search for, and purchase products online. Users can create accounts, add items to their shopping cart, and securely checkout using Clerk for authentication.",
    technology: ["React", "JavaScript", "Tailwind", "Redux", "Clerk"],
    githubLink: "https://github.com/abhii145/Ecommerce",
    demoLink: "https://bazar-zeta.vercel.app/",
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
  Clerk: clerkIcon,
  awsS3Bucket: awsS3Bucket,
};

const Portfolio = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg shadow-lg"
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
                        <strong className="mr-2 text-coral-red">
                          Technology:
                        </strong>
                        {project.technology.map((tech, index) => (
                          <img
                            loading="lazy"
                            key={index}
                            src={technologyIcons[tech]}
                            alt={tech}
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
