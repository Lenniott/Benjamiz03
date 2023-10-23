
import { useState } from "react";
import { aboutMeData } from "../data/aboutMeData";


export function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="max-w-6xl sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="font-general-regular text-left">
        {aboutMe.map((bio, index) => (
          <div
            className={`mb-24 text-ternary-dark text-lg grid gap-12 place-items-center md:flex md:flex-row  md:gap-8 md:h-64 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            key={bio.id}
          >
            <img
              src={bio.image}
              className="h-full transition ease-in-out px-24 md:px-0 order-last md:order-first rounded-lg grayscale hover:grayscale-0 duration-500" 
              alt={bio.imageDescription}
            />
            <div className="">
              <h3 className="text-xl font-semibold pb-4">{bio.title}</h3>
              <p className="font-light">{bio.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

