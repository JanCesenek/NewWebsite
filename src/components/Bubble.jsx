import React, { useState, useContext } from "react";
import classes from "./Bubble.module.css";
import { BsQrCode } from "react-icons/bs";
import { GiOpenFolder } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { LanguageContext } from "../pages/root";

const Bubble = ({
  width,
  height,
  introBubble,
  title,
  content,
  description,
  descriptionGB,
  contact,
  link,
  hiddenStatus,
  clickTheBubble,
  tech,
  getDetail,
  back,
  functionality,
  project,
  video,
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { czech } = useContext(LanguageContext);

  const clickEffect = () => {
    setClicked(!clicked);
    clickTheBubble();
  };

  return (
    <div
      className={`${width || (clicked || functionality ? "min-w-[30rem]" : "w-[30rem]")} ${
        height || (clicked || functionality ? "min-h-[15rem]" : "h-[15rem]")
      } ${
        (functionality || (content && clicked && !project && !contact)) && "w-full md:w-4/5 mt-32"
      } bg-black/90 text-orange-200 border border-orange-400 rounded-lg p-10 shadow-lg shadow-orange-400 relative flex flex-col justify-center items-center ${
        introBubble &&
        `scale-125 border-orange-500 shadow-orange-200 text-[1.2rem] md:text-[1.7rem] ${classes.LightningStrikesTwice}`
      } ${
        !functionality &&
        !clicked &&
        !introBubble &&
        `lg:transition-all lg:duration-1000 lg:hover:cursor-pointer lg:hover:scale-125 lg:hover:border-orange-500 lg:hover:shadow-orange-500`
      } ${functionality && "my-20 mx-20 md:mx-80"} ${hiddenStatus && !clicked && "hidden"} ${
        hovered && !clicked && !functionality && !introBubble && classes.Lightning
      } ${width && height && "font-Goldman text-[1.6rem]"} ${clicked && "mx-80"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={clicked || functionality || introBubble ? undefined : clickEffect}>
      {/* Logo */}
      {title && !functionality && !introBubble && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            clicked || hovered ? classes.BackPart : classes.FrontPart
          }`}>
          <img src="./imgs/flamebulb.svg" alt="logo" className="w-[6rem] opacity-10 -z-20" />
        </div>
      )}
      {/* Logo for description */}
      {functionality && (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5`}>
          <img src="./imgs/flamebulb.svg" alt="logo" className="h-full opacity-10 -z-20" />
        </div>
      )}
      {/* Title for default bubbles without any previous interaction (hover, click) */}
      {title && !functionality && (
        <h1
          className={`${clicked ? classes.BackPart : classes.FrontPart} ${
            project && "text-[2rem] font-bold"
          }`}>
          {title}
        </h1>
      )}
      {/* Icon after you hover over any projects/intro questions, prompting you to click it for more info */}
      {hovered && !clicked && content && (
        <TbHandClick className="animate-bounce w-10 h-10 mt-5 hidden lg:block" />
      )}
      {/* Bubble behaviour for description of apps */}
      {functionality && (
        <div className="flex flex-col items-center [&>*]:my-2">
          <h1 className="font-bold underline text-[4rem] animate-pulse hover:cursor-pointer hover:text-red-600 hover:scale-110">
            <a href={link} target="_blank">
              {title}
            </a>
          </h1>
          <p className="font-bold !my-10 text-[2rem]">
            {czech
              ? "Frameworky/technologie použité v této aplikaci: "
              : "Frameworks/technologies used in this app: "}
            {tech}
          </p>
          <div className="border-y-4 border-orange-600/50 py-4 text-orange-300">
            {czech ? description : descriptionGB}
          </div>
          {video && (
            <div className="flex flex-col items-center my-10 bg-black z-50">
              <h1 className="my-10 text-[3rem] font-bold">
                {czech ? "Názorná ukázka funkcionality:" : "Functionality showcase:"}
              </h1>
              <video controls src={video} />
            </div>
          )}
          <p
            className="flex items-center [&>*]:mx-2 p-2 border border-orange-400 rounded-sm shadow-lg shadow-orange-200 hover:cursor-pointer hover:text-black hover:bg-orange-200 hover:shadow-orange-500"
            onClick={back}>
            <span>{czech ? "Zpět" : "Back"}</span>
            <FaArrowRightToBracket className="w-10 h-10" />
          </p>
        </div>
      )}
      {/* Answers to questions/App intro with links to thorough description or the app itself */}
      <div className={clicked ? classes.FrontPart : classes.BackPart}>
        {content && (
          <div className="flex flex-col">
            <h1 className="font-bold underline self-center mb-10 text-[3rem]">{title}</h1>
            {contact && (
              <div className="flex flex-col">
                <p className="flex items-center [&>*]:mx-2">
                  <MdEmail />{" "}
                  <a href="mailto:jan.cesenekCZ@gmail.com" target="_blank">
                    jan.cesenekCZ@gmail.com
                  </a>
                </p>
                <p className="flex items-center [&>*]:mx-2">
                  <FaPhoneAlt /> <span>+420 773 140 855</span>
                </p>
              </div>
            )}
            <div className="w-full font-bold mt-2 mb-5 py-4 border-b-4 border-orange-600/50">
              {content}
            </div>
            {tech && !functionality && (
              <div className="flex items-center [&>*]:mx-2 my-2">
                <p>
                  {czech ? "Podrobný popis/videoukázka zde - " : "Brief description/video here - "}
                </p>
                <BsQrCode
                  className="w-10 h-10 animate-pulse hover:cursor-pointer"
                  onClick={() => {
                    getDetail({ title, tech, description, descriptionGB, link, video });
                  }}
                />
              </div>
            )}
            {link && (
              <div className="flex items-center [&>*]:mx-2 my-2">
                <p>{czech ? "Odkaz na aplikaci zde - " : "Link to the app here - "}</p>
                <a href={link} target="_blank">
                  <GiOpenFolder className="w-10 h-10 animate-pulse hover:cursor-pointer" />
                </a>
              </div>
            )}
            <div
              className="flex items-center [&>*]:mx-2 mt-10 self-center p-2 border border-orange-400 rounded-sm shadow-lg shadow-orange-200 hover:cursor-pointer hover:text-black hover:bg-orange-200 hover:shadow-orange-500"
              onClick={clickEffect}>
              <p>{czech ? "Zpět" : "Back"}</p>
              <FaArrowRightToBracket className="w-10 h-10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bubble;
