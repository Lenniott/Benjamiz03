import { FiXCircle, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

export function Modal({ image, modal, modalClose }) {
  const bodyDivRef = useRef(null);
  const imageDivRef = useRef(null);
  const modalRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [control, setControl] = useState(true);
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [flexClasses, setFlexClasses] = useState("flex");
  const [storedScrollPosition, setStoredScrollPosition] = useState(0);

  useEffect(() => {
    if (modal) {
      // Store the current scroll position and prevent scrolling
      setStoredScrollPosition(window.scrollY);
      document.body.classList.add("overflow-y-hidden");

      // Scroll to the top after a delay to allow for animation
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 600);
    } else {
      // Restore the scroll position and allow scrolling
      window.scrollTo({ top: storedScrollPosition });
      document.body.classList.remove("overflow-y-hidden");
    }

    // Reset zoom level
    setZoom(1);
  }, [modal]);

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.25);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => (prevZoom > 1 ? prevZoom - 0.25 : prevZoom));
  };

  useEffect(() => {
    const bodyDiv = bodyDivRef.current;
    const imageDiv = imageDivRef.current;

    if (bodyDiv && imageDiv) {
      const bodyDivSize = bodyDiv.getBoundingClientRect();
      const imageDivSize = imageDiv.getBoundingClientRect();

      let newFlexClasses = "flex";
      let newTransformOrigin = "";

      if (imageDivSize.width > bodyDivSize.width) {
        newTransformOrigin = "left";
      } else {
        newFlexClasses += " justify-center ";
      }

      if (imageDivSize.height > bodyDivSize.height) {
        if (newTransformOrigin.includes("left")) {
          newTransformOrigin += " top";
        } else {
          newTransformOrigin = "center top";
        }
      } else {
        newFlexClasses += " items-center ";
      }

      setFlexClasses(newFlexClasses.trim());
      setTransformOrigin(newTransformOrigin.trim());
    }
  }, [zoom, modal]);

  return (
    <>
      {modal && (
        <motion.div
          ref={modalRef}
          key={image?.src || ""}
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -180 }} // This line will make the modal animate out with these values
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500"
        >
          <div className="relative">
            <div className="pb-4 px-4 flex items-start justify-end ">
              <button label="close" onClick={modalClose}>
                <FiXCircle className="text-4xl text-slate-500 hover:text-primary-dark" />
              </button>
            </div>

            <div
              ref={bodyDivRef}
              className={`overflow-scroll ${flexClasses} h-[calc(100vh-230px)]`}
            >
              <div
                ref={imageDivRef}
                className="image container p-0 w-auto h-full "
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: transformOrigin,
                }}
              >
                <img
                  src={image?.src || ""}
                  alt={image?.alt || ""}
                  height={image?.height || ""}
                  width={image?.width || ""}
                  className="w-full h-auto xs:w-auto xs:h-full transition-transform duration-300 transform-gpu"
                />
              </div>
            </div>

            <div className="text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300">
              <div>
                <div
                  onMouseEnter={() => setControl(false)}
                  onMouseLeave={() => setControl(true)}
                >
                  {control ? (
                    <p className="text-primary-dark text-center font-xs px-8 z-20 my-4">
                      view description
                    </p>
                  ) : (
                    <p className="text-primary-dark text-center px-8 z-20 my-4">
                      {image?.alt || ""}
                    </p>
                  )}
                </div>
                <div className="flex items-center w-full justify-center gap-4 mb-4">
                  <Button
                    iconStart={<FiZoomIn />}
                    title="Zoom in"
                    click={handleZoomIn}
                  />
                  <Button
                    iconStart={<FiZoomOut />}
                    title="Zoom out"
                    click={handleZoomOut}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
