import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {  FiMail, FiMapPin } from "react-icons/fi";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
       
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-1 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-1 sm:col-span-2 md:col-span-4 row-span-2">
    <img
      src="https://ih1.redbubble.net/image.815350023.4911/raf,360x360,075,t,fafafa:ca443f4786.u7.jpg"
      alt="avatar"
      className="w-20 h-20 rounded-full mb-4 object-cover"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Get User's Location - 
      <span className="text-zinc-400">
        With Javascript
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "1.5deg",
        scale: 1,
      }}
      className="col-span-1 sm:col-span-2 md:col-span-2 p-0" // removed padding
    >
      <img
        src="/Location1.jpg"
        alt="social-1"
        className="w-full h-full object-cover rounded" // ensure full coverage and rounded corners
      />
    </Block>
    <Block
      whileHover={{
        rotate: "1.5deg",
        scale: 1,
      }}
      className="col-span-1 sm:col-span-2 md:col-span-2 p-0" // removed padding
    >
      <img
        src="/Location2.jpg"
        alt="social-2"
        className="w-full h-full object-cover rounded" // ensure full coverage and rounded corners
      />
    </Block>
    <Block
      whileHover={{
        rotate: "1.5deg",
        scale: 1,
      }}
      className="col-span-1 sm:col-span-2 md:col-span-2 p-0" // removed padding
    >
      <img
        src="/Location3.jpg"
        alt="social-3"
        className="w-full h-full object-cover rounded" // ensure full coverage and rounded corners
      />
    </Block>
    <Block
      whileHover={{
        rotate: "1.5deg",
        scale: 1,
      }}
      className="col-span-1 sm:col-span-2 md:col-span-2 p-0" // removed padding
    >
      <img
        src="/Location4.jpg"
        alt="social-4"
        className="w-full h-full object-cover rounded" // ensure full coverage and rounded corners
      />
    </Block>
  </>
);


const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          Moltres
        </a>
      </p>
    </footer>
  );
};















/*

const AboutBlock = () => (
  <Block className="col-span-1 sm:col-span-2 md:col-span-4 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center gap-4">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-1 sm:col-span-2 md:col-span-3">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);
*/