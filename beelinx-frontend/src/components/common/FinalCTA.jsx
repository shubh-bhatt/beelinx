import { Link } from "react-router-dom";

const FinalCTA = ({
  heading,
  subheading,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  thirdBtnText,
  thirdBtnLink,
}) => {
  return (
    <div className={` text-gray-800 py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">{heading}</h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryBtnText && primaryBtnLink && (
            <Link
              to={primaryBtnLink}
              className="bg-[#4CB4FB] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg hover:text-white transition"
            >
              {primaryBtnText}
            </Link>
          )}

          {secondaryBtnText && secondaryBtnLink && (
            <Link
              to={secondaryBtnLink}
              className="bg-white text-[#4CB4FB] border-2 border-[#4CB4FB] px-6 py-3 rounded-full font-semibold hover:bg-[#4CB4FB]  hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg hover:text-white transition"
            >
              {secondaryBtnText}
            </Link>
          )}
          {thirdBtnText && thirdBtnLink && (
            <Link
              to={thirdBtnLink}
              className="bg-white text-[#4CB4FB] border-2 border-[#4CB4FB] px-6 py-3 rounded-full font-semibold hover:bg-[#4CB4FB]  hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg hover:text-white transition"
            >
              {thirdBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
