"use client";
import React from "react";
import {cn} from '../utills'
import  {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { motion } from "framer-motion";

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import {  IconBrandGoogleFilled,  IconBrandXFilled, IconLayoutNavbarCollapse, IconPawFilled } from "@tabler/icons-react";
import { AnimatePresence,  useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  IconBrandGithub,

} from "@tabler/icons-react";
import { Link } from "react-router-dom";



export function FloatingDockDemo() {


  const links = [
    {
      title: "Home",
      icon: (
        <IconBrandGoogleFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://google.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandXFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconPawFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://paws-world-moltres.netlify.app",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[3.5rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}



// floating footer
export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (<>
    <FloatingDockDesktop items={items} className={desktopClassName} />
    <FloatingDockMobile items={items} className={mobileClassName} />
  </>);
};

const FloatingDockMobile = ({
  items,
  className
}) => {
  const [open, setOpen] = useState(false);
  return (
    (<div className={cn("relative  hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
                <Link
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center">
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center">
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>)
  );
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    (<motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex flex-row h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 mt-6 mb-6 pb-3",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>)
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href
}) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const isExternalLink = href.startsWith("http");  // Check if the link is external

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      {isExternalLink ? (
        <a
          href={href}
          target="_blank"  // Open in a new tab
          rel="noopener noreferrer"  // For security purposes
          className="flex items-center justify-center"
        >
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </a>
      ) : (
        <Link
          href={href}  // This is used for internal routing (e.g., /login, /home)
        >
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
}











export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {/* Card 1 */}
      <CardContainer className="inter-var">
  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300] h-auto rounded-xl p-6 border">
    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
    JavaScript Full Course
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Learn the fundamentals and advanced concepts of JavaScript to build dynamic web applications.
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="https://geeksui.codescandy.com/geeks/assets/images/course/course-javascript.jpg"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <a
        translateZ={20}
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </a>
      <a
        translateZ={20}
        href="https://youtu.be/lfmg-EJ8gm4?si=QpFv5qRsYt88Zr3O"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
        Visit
      </a>
    </div>
  </CardBody>
</CardContainer>


      <CardContainer className="inter-var">
  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300] h-auto rounded-xl p-6 border">
    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
    React Full Course
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Learn React fundamentals and advanced concepts to build interactive web applications.
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <a
        translateZ={20}
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </a>
      <a
        translateZ={20}
        href="https://youtu.be/CgkZ7MvWUAA?si=smT1A-kbNasEI8El"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
        Visit
      </a>
    </div>
  </CardBody>
</CardContainer>



      {/* Card 3 */}
      <CardContainer className="inter-var">
  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300] h-auto rounded-xl p-6 border">
    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
    Data Structures Full Course
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Understand core data structures like arrays, linked lists, and trees.
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="https://files.codingninjas.in/article_images/custom-upload-1728967721-947da464.webp"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <a
        translateZ={20}
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </a>
      <a
        translateZ={20}
        href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=XwLWvQuTggWXaESh"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
        Visit
      </a>
    </div>
  </CardBody>
</CardContainer>
</div>
  );
}







const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    (<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}>
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>)
  );
};

export const CardBody = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}>
      {children}
    </div>)
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    (<Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}>
      {children}
    </Tag>)
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};






















