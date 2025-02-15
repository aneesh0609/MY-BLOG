import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href='/javascript'
          heading="JavaScript"
        
          imgSrc="https://ih1.redbubble.net/image.2221346343.9025/raf,360x360,075,t,fafafa:ca443f4786.jpg"
        />
        <Link
          href='/react'
          heading="React"
        
          imgSrc="https://pics.craiyon.com/2023-11-27/VtbOOPNuRuKEOqEKURG5ZA.webp"
        />
        <Link
          href='/node'
          heading="Node.js"
          
          imgSrc="https://imgcdn.stablediffusionweb.com/2024/9/9/2f58cc46-1499-4708-96bf-4de4ffab6de5.jpg"
        />
        <Link
          href='/mongodb'
          heading="MongoDB"
         
          imgSrc="https://miro.medium.com/v2/resize:fit:1200/1*gf_XcvKMkfwiQLxTVqGiaA.png"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        {/* Wrap the heading text inside RouterLink */}
        <RouterLink to={href}>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
        </RouterLink>

        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      {/* Image that will be hidden on small screens */}
      <motion.img
        style={{
          top,
          left,
          translateX: "-10%",
          translateY: "-10%",
        }}
        variants={{
          initial: { scale: 0, rotate: "1.5deg" },
          whileHover: { scale: 1, rotate: "2.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="index-0 z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 hidden sm:block" // Hide image on small screens (sm:block shows it on larger screens)
        alt={`Image representing a link for ${heading}`}
      />

      {/* Wrap the arrow icon with RouterLink */}
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <RouterLink to={href}>
          <FiArrowRight className="text-5xl text-neutral-50" />
        </RouterLink>
      </motion.div>
    </motion.a>
  );
};
