import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Modal from "react-modal";

export default function InteractiveFloorPlan() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    // After the SVG is loaded, we can access its DOM
    const svgElement = document.getElementById("floorPlan");
    const room1 = svgElement?.getElementById("room1");

    // Add an event listener to room1
    room1?.addEventListener("click", openModal);

    // Clean up the event listener when the component unmounts
    return () => {
      room1?.removeEventListener("click", openModal);
    };
  }, []);

  return (
    <div>
      <ReactSVG
        id="floorPlan"
        src="/Downstairs.svg"
        beforeInjection={(svg) => {
          svg.setAttribute("style", "width: 500px; height: 500px");
        }}
      />

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Room 1</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal for Room 1</div>
      </Modal>
    </div>
  );
}