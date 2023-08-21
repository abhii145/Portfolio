import meImage from "../assets/images/working.gif";

const Aboutme = ({ id }) => {
  return (
    <div id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">About me</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={meImage}
              alt="Laptop"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <div className="lg:max-w-lg info-text">
              👋 Hey there! I&apos;m Abhishek Yadav, a passionate frontend
              developer with four years of hands-on experience in crafting
              captivating web experiences.
              <div className="mt-1 lg:max-w-lg info-text">
                🚀 My journey began with HTML and CSS, and over the years,
                I&apos;ve honed my skills in JavaScript and TypeScript, using
                them to bring ideas to life and create dynamic user interfaces.
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                ⚛️ I thrive in the world of React.js and Next.js, utilizing
                these powerful tools to build responsive, performant, and
                user-friendly applications that leave a lasting impression.
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                💡 Beyond coding, I&apos;m well-versed in MongoDB for handling
                data and Git for seamless collaboration within development
                teams.{" "}
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                🌟 I&apos;m all about turning design into reality and enhancing
                user interactions.
                <span className="text-coral-red">
                  {" "}
                  Let&apos;s connect and create something amazing together!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
