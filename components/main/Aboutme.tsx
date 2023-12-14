import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center gap-5 h-full py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-10 px-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/YourProfileImage.jpg"   // Update with your actual profile image path
            alt="Profile"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-300 mt-20"> {/* Adjusted margin-top */}
          <p className="text-xl font-bold mb-5"> {/* Added font-bold and margin-bottom */}
            Hello! I&apos;m Debmalya Mukherjee, a passionate web developer with expertise in HTML, CSS, React, JavaScript, Tailwind CSS, Git, SQL, and other modern web-dev technologies.

          </p>
          <p className="mt-2">
            I love creating responsive and user-friendly web applications. My journey in web development started with creating a basic tic-tac-toe web application. Currently, I am focusing on expanding my knowledge in designing like Ui/Ux, Figma.
          </p>
          <p className="mt-2">
            In addition to coding, I enjoy watching sports and playing PC games. Feel free to explore my portfolio and check out some of my projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
