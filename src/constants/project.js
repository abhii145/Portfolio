import threads from "../assets/images/threads.png"
import festifind from "../assets/images/festifind.png"
import ecom from "../assets/images/ecom.png"
import htmlIcon from "../assets/icon/html.svg"
import awsS3Bucket from "../assets/icon/awsS3.svg"
import cssIcon from "../assets/icon/css.svg"
import tailwindIcon from "../assets/icon/tailwind.svg"
import jsIcon from "../assets/icon/js.svg"
import tsIcon from "../assets/icon/ts.svg"
import reactIcon from "../assets/icon/react.svg"
import nextjsIcon from "../assets/icon/nextjs.svg"
import reduxIcon from "../assets/icon/redux.svg"
import mongoDBIcon from "../assets/icon/mongoDB.svg"
import gitIcon from "../assets/icon/git.svg"
import clerkIcon from "../assets/icon/clerk.svg"

export const projects = [
  {
    title: "FestiFind",
    image: festifind,
    description:
      "Festifind is a modern Full Stack event management platform where admins can manage events and transactions, while users can browse upcoming events, book tickets, and view their booked tickets in their profile section.",
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
]

export const technologyIcons = {
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
}
