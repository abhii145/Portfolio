import { icons } from "../constants/assets"
import React from "react"

const Skills = React.memo(function Skills() {
  const iconsList = [
    { name: "HTML", src: icons.htmlIcon },
    { name: "CSS", src: icons.cssIcon },
    { name: "Tailwind CSS", src: icons.tailwindIcon },
    { name: "Storybook", src: icons.storybook },
    { name: "JavaScript", src: icons.jsIcon },
    { name: "TypeScript", src: icons.tsIcon },
    { name: "React", src: icons.reactIcon },
    { name: "Next.js", src: icons.nextjsIcon },
    { name: "Redux", src: icons.reduxIcon },
    { name: "React Query", src: icons.reactqueryIcon },
    { name: "Node", src: icons.node },
    { name: "MongoDB", src: icons.mongoDBIcon },
    { name: "Jest", src: icons.jest },
    { name: "Playwright", src: icons.playwright },
    { name: "Docker", src: icons.docker },
    { name: "Git", src: icons.gitIcon },
  ]

  return (
    <div className="py-1">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Tech Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {iconsList.map((icon) => (
            <div
              key={icon.name}
              className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-pgreen hover:scale-105 "
            >
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.name}
                aria-label={icon.name}
                className="w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Skills
