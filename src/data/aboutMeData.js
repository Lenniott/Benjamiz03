import { v4 as uuidv4 } from "uuid";
import aboutMeImages from "../public/images/aboutMe";
export const aboutMeData = [
  {
    id: uuidv4(),
    title: "👤 About me",
    image: aboutMeImages.point,
    bio: (
      <>
        I'm Benjamin, a problem solver who loves a challenge. I excel at
        simplifying complex issues and taking the initiative to fix what's
        broken. I value direct communication and factual reasoning, and I'm
        committed to personal growth and sensitivity to others' needs. Outside
        work, I'm an avid learner, bouldering enthusiast, and singer-songwriter
        who's always keen to expand my knowledge.
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "👨‍👩‍👧‍👦 Family & Me",
    image: aboutMeImages.family,
    bio:  (
      <>I'm a devoted husband and father, 
      my family is what drives me to continually grow and improve both personally and professionally. 
      My main aim is to ensure a strong foundation for us to thrive.
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "👨‍💻 Professional Me",
    image: aboutMeImages.proMe,
    bio:  (
      <>
      I thrive in agile settings, advocating for full team involvment throughout development.
      My design approach balances user needs with business goals. With a strong technical understanding,
      I excel at fostering collaboration to deliver impactful, straightforward solutions.
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "🔍 Curious me",
    image: aboutMeImages.thoughts,
    bio:(
      <>
      I'm naturally curious, and always eager to dig deeper. 
      I am continually working towards making the fuzzy focused through investigation, 
      questions and validating work often with other stake holders
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "🎯 Why Me?",
    image: aboutMeImages.cliff,
    bio:( 
    <>
    I'm passionate about product development and deeply committed to refining the principles that guide how my team and I build products.
    My approach blends empathy, collaboration, and curiosity with strategic thinking and continuous learning. 
    This holistic perspective enables us to truly embody the agile methodology in every project we undertake.
    </>
    ), 
  },
];
