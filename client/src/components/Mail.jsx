import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin } from "react-icons/fi";

export const RevealBento1 = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <EmailListBlock />
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
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6", // Default padding here
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-4xl font-medium leading-tight">
    Code, Learn, Build, Repeat{" "}
      <span className="text-zinc-400">
       – Keep pushing the boundaries of web development!
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 flex justify-center items-center p-0"  // Remove padding here
    >
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png"
        alt="Image 1"
        className="w-full h-full object-cover rounded-lg"
      />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 flex justify-center items-center p-0"  // Remove padding here
    >
      <img
        src="https://wpengine.com/wp-content/uploads/2021/07/jsheader.png"
        alt="Image 2"
        className="w-full h-full object-cover rounded-lg"
      />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 flex justify-center items-center p-0"  // Remove padding here
    >
      <img
        src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"
        alt="Image 3"
        className="w-full h-full object-cover rounded-lg"
      />
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 flex justify-center items-center p-0"  // Remove padding here
    >
      <img
        src="https://i.ytimg.com/vi/kZ77X67GUfk/mqdefault.jpg"
        alt="Image 4"
        className="w-full h-full object-cover rounded-lg"
      />
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
    Welcome to Moltres Blog.{" "}
      <span className="text-zinc-400">
       your go-to place for exploring React, MongoDB, Node.js, JavaScript, and insightful articles. Dive into the world of modern web development!
      </span>
    </p>
  </Block>
);



const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
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



const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @Moltres
        </a>
      </p>
    </footer>
  );
};
