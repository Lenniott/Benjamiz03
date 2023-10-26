import AppFooterCopyright from "./AppFooterCopyright";
import { FiGithub, FiLinkedin, FiBriefcase } from "react-icons/fi";
const socialLinks = [
  {
    id: 1,
    icon: <FiBriefcase />,
    help: "Go to résumé",
    url: "https://drive.google.com/file/d/1RvziNeA5eCUSuvf1LMSKcMNU2DlcdWHR/view?usp=sharing",
  },
  {
    id: 2,
    icon: <FiGithub />,
    help: "Go to github",
    url: "https://github.com/Lenniott",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    help: "Go to linkedin",
    url: "https://www.linkedin.com/in/mizranyb/",
  },
];

export function AppFooter() {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-ternary-light">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-ternary-dark mb-5">More</p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="bg-ternary-light text-ternary-dark hover:bg-ternary-dark hover:text-ternary-light  cursor-pointer rounded-lg shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
}
