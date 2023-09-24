import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, education } from "../components/constant";

const ExperienceTimeline = ({ id }) => {
  const [activeTab, setActiveTab] = useState("work"); // Default to 'work' tab

  return (
    <div id={id} className="container mx-auto">
      <div className="flex justify-between">
        <button
          className={`text-xl font-semibold mb-6 text-pblue ${
            activeTab === "work" ? "eudcation" : "work"
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work Experience
        </button>
        <button
          className={`text-xl font-semibold mb-6 text-pblue ${
            activeTab === "education" ? "underline" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>
      {activeTab === "work" && (
        <VerticalTimeline animate>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: experience.iconBg,
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${experience.iconBg}`,
              }}
              date={experience.date}
              iconStyle={{
                background: experience.iconBg,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
              }}
              icon={
                <img
                  src={experience.icon}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  alt="Company Icon"
                />
              }
            >
              <h4 className="vertical-timeline-element-subtitle font-bold">
                {experience.company_name} <span className="ml-5"> | </span>
                <span className="vertical-timeline-element-title font-light ml-5">
                  {experience.title}
                </span>
              </h4>

              <ul className="list-disc pl-5">
                {experience.points.map((point, idx) => (
                  <li key={idx} className="info-text">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}

      {activeTab === "education" && (
        <VerticalTimeline animate>
          {education.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: experience.iconBg,
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${experience.iconBg}`,
              }}
              date={experience.date}
              iconStyle={{
                background: experience.iconBg,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
              }}
              icon={
                <img
                  src={experience.icon}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  alt="Company Icon"
                />
              }
            >
              <h4 className="vertical-timeline-element-subtitle font-bold">
                {experience.company_name} <span className="ml-5"> | </span>
                <span className="vertical-timeline-element-title font-light ml-5">
                  {experience.title}
                </span>
              </h4>

              <ul className="list-disc pl-5">
                {experience.points.map((point, idx) => (
                  <li key={idx} className="info-text">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
};

export default ExperienceTimeline;
