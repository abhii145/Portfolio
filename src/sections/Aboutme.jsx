import meImage from "../assets/images/working.gif";

const Aboutme = ({id}) => {
  return (
    <div id={id}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-pblue">About me</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={meImage}
              alt="Laptop"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <p className="mt-4 lg:max-w-lg info-text">
              A passionate and results-driven Frontend Developer with a keen eye
              for crafting captivating user experiences. My arsenal of skills
              includes proficiency in HTML5, CSS3, and Bootstrap, allowing me to
              mold pixel-perfect designs into reality. My command over
              JavaScript and TypeScript empowers me to create dynamic and
              interactive web applications that engage and delight users. I am
              well-versed in leveraging the power of React.js and Next.js to
              build seamless, performant, and scalable front-end solutions. When
              it comes to state management, Redux is my tool of choice, ensuring
              that complex data flows are managed with elegance and efficiency.
              My familiarity with MongoDB enables me to seamlessly integrate
              databases, ensuring that the backend and frontend work
              harmoniously. Git is my trusted companion, helping me collaborate
              with teams and track changes effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
