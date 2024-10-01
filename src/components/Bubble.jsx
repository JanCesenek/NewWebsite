import React, { useState, useContext, createContext } from "react";
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
      } bg-black/80 text-blue-200 border border-blue-400 rounded-lg p-10 shadow-lg shadow-blue-400 flex flex-col justify-center items-center ${
        introBubble &&
        `scale-125 border-blue-500 shadow-blue-200 text-[1.2rem] md:text-[1.7rem] ${classes.Lightning}`
      } ${
        !functionality &&
        !clicked &&
        !introBubble &&
        `transition-all duration-1000 hover:cursor-pointer hover:scale-125 hover:border-blue-500 hover:shadow-blue-500`
      } ${functionality && "my-20 mx-80"} ${hiddenStatus && !clicked && "hidden"} ${
        hovered && !clicked && !functionality && !introBubble && classes.Lightning
      } ${width && height && "font-Goldman text-[1.6rem]"} ${clicked && "mx-80"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={clicked || functionality || introBubble ? undefined : clickEffect}>
      {/* Title for default bubbles without any previous interaction (hover, click) */}
      {title && !functionality && (
        <h1 className={clicked ? classes.BackPart : classes.FrontPart}>{title}</h1>
      )}
      {/* Icon after you hover over any projects/intro questions, prompting you to click it for more info */}
      {hovered && !clicked && content && <TbHandClick className="animate-bounce w-10 h-10 mt-5" />}
      {/* Bubble behaviour for description of apps */}
      {functionality && (
        <div className="flex flex-col items-center [&>*]:my-2">
          <h1 className="font-bold underline text-[2rem]">{title}</h1>
          <p className="font-bold">
            {czech
              ? "Frameworky/technologie použité v této aplikaci: "
              : "Frameworks/technologies used in this app: "}
            {tech}
          </p>
          <div className="border-y-4 border-blue-600/50 py-4">
            {czech ? description : descriptionGB}
          </div>
          <p
            className="flex items-center [&>*]:mx-2 p-2 border border-blue-400 rounded-sm shadow-lg shadow-blue-200 hover:cursor-pointer hover:text-black hover:bg-blue-200 hover:shadow-blue-500"
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
            <h1 className="font-bold underline self-center mb-10 text-[1.7rem]">{title}</h1>
            <div className="w-full font-bold mt-2 mb-5 py-4 border-b-4 border-blue-600/50">
              {content}
            </div>
            {tech && !functionality && (
              <div className="flex items-center [&>*]:mx-2 my-2">
                <p>Podrobný popis zde - </p>
                <BsQrCode
                  className="w-10 h-10 animate-pulse hover:cursor-pointer"
                  onClick={() => {
                    getDetail({ title, tech, description, descriptionGB });
                  }}
                />
              </div>
            )}
            {link && (
              <div className="flex items-center [&>*]:mx-2 my-2">
                <p>Odkaz na aplikaci zde - </p>
                <a href={link} target="_blank">
                  <GiOpenFolder className="w-10 h-10 animate-pulse hover:cursor-pointer" />
                </a>
              </div>
            )}
            <div
              className="flex items-center [&>*]:mx-2 mt-10 self-center p-2 border border-blue-400 rounded-sm shadow-lg shadow-blue-200 hover:cursor-pointer hover:text-black hover:bg-blue-200 hover:shadow-blue-500"
              onClick={clickEffect}>
              <p>{czech ? "Zpět" : "Back"}</p>
              <FaArrowRightToBracket className="w-10 h-10" />
            </div>
          </div>
        )}
        {contact && (
          <div className="flex flex-col">
            <p className="flex items-center mx-2">
              <MdEmail />{" "}
              <a href="mailto:jan.cesenekCZ@gmail.com" target="_blank">
                jan.cesenekCZ@gmail.com
              </a>
            </p>
            <p className="flex items-center mx-2">
              <FaPhoneAlt /> <span>+420 773 140 855</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bubble;
