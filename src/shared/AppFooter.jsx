import AppFooterCopyright from "./AppFooterCopyright";
import { FiGithub, FiLinkedin, FiBriefcase } from "react-icons/fi";
import { CardToListComponent } from "../components";
import { useMediumData } from  "../api/Medium";

const socialLinks = [
  {
    id: 1,
    icon: <FiBriefcase />,
    help: "Go to résumé",
    url: "https://drive.google.com/file/d/1RvziNeA5eCUSuvf1LMSKcMNU2DlcdWHR/view?usp=sharing",
    tooltip: "resumé",
  },
  {
    id: 2,
    icon: <FiGithub />,
    help: "Go to github",
    url: "https://github.com/Lenniott",
    tooltip: "github",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    help: "Go to linkedin",
    url: "https://www.linkedin.com/in/mizranyb/",
    tooltip: "linkedin",
  },
];

export function AppFooter() {
  const posts = useMediumData();
  return (
    <div className="container mx-auto">
      {console.log(posts.slice(0,2))}
      <div className="pt-10 sm:pt-10 pb-8 mt-20 border-t-2 border-ternary-light">
      <CardToListComponent title={"Medium articles"} items={posts.slice(0,3)}/>
        {/* Footer social links */}
        <div className="mt-8 font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-2xl text-ternary-dark mb-5">Profile links</p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="group bg-ternary-light  hover:bg-ternary-dark   cursor-pointer rounded-lg shadow-sm p-4 duration-300 relative"
              >
                <i className="text-xl sm:text-2xl md:text-3xl text-ternary-dark group-hover:text-ternary-light">{link.icon}</i>
                <span className="z-50 -bottom-8 left-0  hidden group-hover:flex bg-slate-300 rounded-md items-center shadow-lg justify-center absolute mt-1 text-xs font-light transition ease-in-out duration-500 p-1 px-4 ">
            {link.tooltip}
          </span>
              </a>
              
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
}
