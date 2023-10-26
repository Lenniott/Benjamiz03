import { v4 as uuidv4 } from "uuid";

export const experienceData = [
  {
    id: uuidv4(),
    title: "Product Designer @ Mayden",
    date: "May 2023 - Present",
    location: "Bath",
    tasks: [
      {
        id: uuidv4(),
        task: "User Engagement: Led customer touchpoint initiative.",
      },
      {
        id: uuidv4(),
        task: "Organisational Culture: Active in 'Ways of Working' group.",
      },
      {
        id: uuidv4(),
        task: "Data-driven: Collaborated with data and security teams.",
      },
      {
        id: uuidv4(),
        task: "Design Advocacy: Integrated design into product development.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Product Designer @ Insendi",
    date: "Jan 2022 - May 2023",
    location: "Remote",
    tasks: [
      {
        id: uuidv4(),
        task: "Built and maintained component library on Figma.",
      },
      {
        id: uuidv4(),
        task: "Streamlined product development practices.",
      },
      {
        id: uuidv4(),
        task: "Transitioned from media to design, showcasing adaptability.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Lead media specialist @ Insendi",
    date: "August 2018 - Jan 2022",
    location: "Remote",
    tasks: [
      {
        id: uuidv4(),
        task: "Scaled video production.",
      },
      {
        id: uuidv4(),
        task: "Built bespoke efficiency tools.",
      },
      {
        id: uuidv4(),
        task: "Mentored freelancers.",
      },
    ],
  },
  // Add more experience objects here
];
