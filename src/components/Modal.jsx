import { FiXCircle, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

export function Modal({ image, modal, modalClose }) {
  const bodyDivRef = useRef(null);
  const imageDivRef = useRef(null);
  const modalRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const textBoxRef = useRef(null); // Ref for the text box
  const [textBoxHeight, setTextBoxHeight] = useState(0); // State to store the text box height

  const [control, setControl] = useState(true);
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [flexClasses, setFlexClasses] = useState("flex");


  useEffect(() => {
    if (modal) {
      // Store the current scroll position and prevent scrolling
      document.body.classList.add("overflow-y-hidden");

    }
  
    // Reset zoom level
    setZoom(1);
  
    // Cleanup function to be called when the modal is closed or the component is unmounted
    return () => {
      // Restore the scroll position and allow scrolling
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [modal]);
  
  useEffect(() => {
    // Measure the height of the text box and update the state
    if (textBoxRef.current) {
      setTextBoxHeight(textBoxRef.current.offsetHeight);
    }
  }, [modal]); // This effect should run when the modal opens

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
          className="bg-primary-light fixed top-0 left-0 w-screen h-screen z-50  py-8 duration-500"
        >
          <div className="relative">
            <div className="pb-4 px-4 flex items-start justify-end ">
              <button label="close" onClick={modalClose}>
                <FiXCircle className="text-4xl text-slate-500 hover:text-primary-dark" />
              </button>
            </div>
            <div
              ref={bodyDivRef}
              className={`overflow-scroll ${flexClasses}`}
              style={{ height: `calc(100vh - ${parseInt(textBoxHeight)+80}px)` }} // Use inline style for dynamic height}
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
                  src={image?.image || ""}
                  alt={image?.alt || ""}
                  className="w-full h-auto xs:w-auto xs:h-full transition-transform duration-300 transform-gpu"
                />
              </div>
            </div>

            <div ref={textBoxRef} className="text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300">
                <div>
                    <p className="text-primary-dark text-center px-8 z-20 my-4 mx-auto max-w-4xl">
                      {image?.text || ""}
                    </p>
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
        </motion.div>
      )}
    </>
  );
}
