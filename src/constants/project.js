import { images, icons } from "../constants/assets"

export const projects = [
  {
    title: "FestiFind",
    image: images.festifind,
    description:
      "Festifind is a modern Full Stack event management platform where admins can manage events and transactions, while users can browse upcoming events, book tickets, and view their booked tickets in their profile section.",
    technology: [
      "nextjsIcon",
      "tsIcon",
      "tailwindIcon",
      "reduxIcon",
      "mongoDBIcon",
      "awsS3Bucket",
    ],
    githubLink: "https://github.com/abhii145/festifind",
    demoLink: "https://festifind-near.vercel.app/",
  },
  {
    title: "Threads-clone",
    image: images.threads,
    description:
      "Threads Clone is a project that aims to replicate the core functionalities and features of the popular communication and messaging app called 'Threads.' Similar to the original Threads app, the clone project likely focuses on providing users with a platform for private and close-circle communication.",
    technology: [
      "nextjsIcon",
      "tsIcon",
      "tailwindIcon",
      "reduxIcon",
      "mongoDBIcon",
      "clerkIcon",
    ],
    githubLink: "https://github.com/abhii145/threads",
    demoLink: "https://threads-abhii145.vercel.app/",
  },
  {
    title: "Ecommerce",
    image: images.reactquery,
    description:
      "A modern e-commerce app built with React, offering product listing with pagination, search, filters, detailed views, cart management, and favorites. Features React Query, Redux Toolkit, and React Router DOM. Achieves 95% test coverage using React Testing Library, Snapshot Testing, and Playwright for end to end testing.",
    technology: [
      "reactIcon",
      "tailwindIcon",
      "reduxIcon",
      "reactqueryIcon",
      "jest",
      "playwright",
    ],
    githubLink: "https://github.com/abhii145/react-query",
    demoLink: "https://react-query-ecom.vercel.app/",
  },
]

export const technologyIcons = icons
