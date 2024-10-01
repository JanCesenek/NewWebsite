import React, { useState, useContext } from "react";
import Bubble from "../components/Bubble";
import { LanguageContext } from "./root";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Intro = () => {
  const [hidden, setHidden] = useState(false);

  const { czech } = useContext(LanguageContext);

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <Bubble
        width="md:min-w-[40rem] min-w-[25rem]"
        height="min-h-[5rem]"
        introBubble
        title={
          czech
            ? "Jan Česenek - Webovky šité na míru"
            : "Johnny Garlic - Websites tailored for your needs"
        }
      />
      <Link to="/projects">
        <div className="mt-20 flex items-center [&>*]:mx-2 bg-black/50 p-2 shadow-md shadow-blue-400">
          <p>{czech ? "Moje projekty" : "My projects"}</p>
          <FaArrowCircleRight />
        </div>
      </Link>
      <div
        className={`mt-10 w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[50rem] justify-items-center items-center ${
          hidden && "!grid-cols-1"
        }`}>
        <Bubble
          title={czech ? "Jaký je účel této webovky?" : "What is the purpose of this website?"}
          content={
            czech
              ? "Současný účel je ukázat moje dovednosti v IT, které jsem získal během období svého samostudia. Tato stránka se neustále aktualizuje, jelikož pořád pracuji na nových projektech"
              : "The current purpose is to showcase my IT skills I have built over the period of studying on my own. This website is still in progress since I keep working on new projects."
          }
          hiddenStatus={hidden}
          clickTheBubble={() => setHidden(!hidden)}
        />
        <Bubble
          title={czech ? "Proč byste mě měli zaměstnat?" : "Why should you hire me?"}
          content={
            czech
              ? "Ačkoliv nemám titul v oboru, začal jsem se od začátku vzdělávat sám přes online kurzy. Jelikož jsem neměl žádnou podporu univerzitního prostředí, musel jsem vyvinout dodatečnou snahu hledáním různých zdrojů stejně jako plánováním, jak získat nové dovednosti, a kterým dát přednost podle důležitosti. Už pouze skutečnost, že se programování věnuji sám, dokazuje, že jsem do toho zapálený, rychle se učím, jsem kreativní (jelikož jsem musel přijít s novými nápady, jak demonstrovat svoje znalosti) a také, že jsem připraven učit se nové věci, jakmile získám práci v oboru."
              : "Although I don't have an IT degree, I have started from scratch learning from online courses. With zero guidance from university professors, I had to make an additional effort looking for various resources as well as making a plan how to gain new skills and prioritize them by importance. Just the fact that I'm doing this on my own, shows that I'm clearly passionate about programming, I'm a quick learner, I'm creative (since I have to come up with new ideas on how to demonstrate my knowledge) and I'm ready to keep learning new things once getting an IT job."
          }
          hiddenStatus={hidden}
          clickTheBubble={() => setHidden(!hidden)}
        />
        <Bubble
          title={czech ? "Jak mě můžete kontaktovat?" : "How can you contact me?"}
          content
          contact
          hiddenStatus={hidden}
          clickTheBubble={() => setHidden(!hidden)}
        />
        <Bubble
          title={
            czech
              ? "S jakými programovacími jazyky a technologiemi jsem už pracoval?"
              : "Which programming languages and technologies have I already worked with?"
          }
          content={
            czech
              ? "Základní trio pro vývoj webových stránek - (HTML, CSS, JS), React.js, TailwindCSS, TypeScript, Next.js, Redux, Express.js, Node.js, databases - (mySQL, mongoDB), Java, VBA."
              : "Basic web development trio - (HTML, CSS, JS), React.js, TailwindCSS, TypeScript, Next.js, Redux, Node.js, databases - (mySQL, mongoDB), Java, VBA."
          }
          hiddenStatus={hidden}
          clickTheBubble={() => setHidden(!hidden)}
        />
      </div>
    </div>
  );
};

export default Intro;
