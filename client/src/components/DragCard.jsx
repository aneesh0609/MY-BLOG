import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
     
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div
      className="relative z-0 w-full h-full flex justify-center items-center"
      ref={containerRef}
    >
      <Card
        containerRef={containerRef}
        src="https://ih1.redbubble.net/image.1874928243.1165/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
        alt="Example image"
        rotate="6deg"
        transform="translate(-50%, -50%)"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/7f/5b/9d/7f5b9d9df9114b8de6864ebbdc2e1aa4.jpg"
        alt="Example image"
        rotate="12deg"
        transform="translate(-50%, -50%)"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/premium-photo/anthropomorphic-wild-animals-character-using-virtual-reality-headset_1000823-192992.jpg?semt=ais_hybrid"
        alt="Example image"
        rotate="-6deg"
        transform="translate(-50%, -50%)"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://t4.ftcdn.net/jpg/05/61/94/83/360_F_561948394_eSfXqIaDT8FeAcb4A9Ab79m5UNy8cL5p.jpg"
        alt="Example image"
        rotate="8deg"
        transform="translate(-50%, -50%)"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171841_ek6D8jhk0oh3rwQgSkBdDHcatLaJZ4iQ.jpg"
        alt="Example image"
        rotate="18deg"
        transform="translate(-50%, -50%)"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/ab/dd/cd/abddcdd2dd91d4cd0ccb5f2bd01f4c8d.jpg"
        alt="Example image"
        rotate="-3deg"
        transform="translate(-50%, -50%)"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, transform, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        transform: transform,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
