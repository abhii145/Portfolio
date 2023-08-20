import LocationIcon from "../assets/icon/location.svg";
import MailIcon from "../assets/icon/mail.svg";

const ContactPage = ({ id }) => {
  return (
    <div className="py-8" id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Contact Me</h2>
        <p className="text-info mb-5">Don&apos;t be shy! Hit me up! 👇</p>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 p-2 ">
              <img
                src={LocationIcon}
                alt="Location Icon"
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Mumbai, India</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 p-2">
              <img src={MailIcon} alt="Mail Icon" className="w-full h-full" />
            </div>
            <a
              href="mailto:abhiy145@gmail.com"
              className="text-lg font-semibold text-blue-500 hover:underline transition-colors duration-300"
            >
              abhiy145@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
