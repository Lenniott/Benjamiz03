import { v4 as uuidv4 } from "uuid";
import aboutMeImages from "../images/aboutMe";
export const aboutMeData = [
  {
    id: uuidv4(),
    title: "👤 About me",
    image: aboutMeImages.point,
    imageDescription: "Point",
    bio: "I'm Benjamin, a problem solver who loves a challenge. I excel at simplifying complex problems and taking the initiative to fix what's broken. I value direct communication and factual reasoning, and I'm committed to personal growth. Outside work, I enjoy bouldering, am a singer-songwriter, and enjoy writing.",
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
    bio: "I champion hypothesis-driven ways of working; I believe a team that learns together grows together. My design cycle approach is simple: 'plan visually, validate regularly, and piviot when necessary'. I continually work with my team to balance the prioritisation of user needs, technical limitations, and business goals.",
  },
  {
    id: uuidv4(),
    title: "🔍 Curious me",
    image: aboutMeImages.thoughts,
    imageDescription: "Thoughts",
    bio: "I'm naturally curious and always eager to dig deeper. I am continually working towards clarifying ambiguities through investigation, asking questions, and frequently validating work with other stakeholders. I cannot simply act because I am told to; understanding the 'why' and the expected outcome is extremely important to me."
  },
  {
    id: uuidv4(),
    title: "🎯 Why Me?",
    image: aboutMeImages.cliff,
    imageDescription: "Cliff",
    bio:"I am passionate about product development and deeply committed to refining the principles that guide the way the team and I build products. I strive to improve our processes by removing inefficiencies, challenging the status quo, engaging in rigorous debate, and embracing the inherent struggles."
  },
];
