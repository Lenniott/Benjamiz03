import { v4 as uuidv4 } from "uuid";
import aboutMeImages from "../images/aboutMe";
export const aboutMeData = [
  {
    id: uuidv4(),
    title: "👤 About me",
    image: aboutMeImages.point,
    imageDescription: "Point",
    bio: "I'm Benjamin, a problem solver who loves a challenge. I excel at simplifying complex issues and taking the initiative to fix what's broken. I value direct communication and factual reasoning, and I'm committed to personal growth. Outside work I enjoy bouldering, I am a singer-songwriter and enjoy writing.",
  },
  {
    id: uuidv4(),
    title: "👨‍👩‍👧‍👦 Family & Me",
    image: aboutMeImages.family,
    imageDescription: "Family",
    bio:  "I'm a devoted husband and father, my family is what drives me to continually grow and improve both personally and professionally. My main aim is to ensure a strong foundation for us to thrive."
  },
  {
    id: uuidv4(),
    title: "👨‍💻 Professional Me",
    image: aboutMeImages.proMe,
    imageDescription: "Professional Me",
    bio: "I champion agile and hypothesis driven ways of working, advocating for full team involvment throughout discovery and development. My design approach is simple 'collect, assess, deliver'. I continuously work with my team to balance the prioritistion of user needs and business goals.",
  },
  {
    id: uuidv4(),
    title: "🔍 Curious me",
    image: aboutMeImages.thoughts,
    imageDescription: "Thoughts",
    bio: "I'm naturally curious, and always eager to dig deeper. I am continually working towards making the fuzzy focused through investigation, questions and validating work often with other stake holders. I can not simplying do beacue I am told to, the why and the outcome is extremely important to me."
  },
  {
    id: uuidv4(),
    title: "🎯 Why Me?",
    image: aboutMeImages.cliff,
    imageDescription: "Cliff",
    bio:"I'm passionate about product development and deeply committed to refining the principles that guide how my team and I build products. I try and improves the way I work removing inefficiencies, I challenge the status quo, I love a tough debate and embrace the struggle."
  },
];
