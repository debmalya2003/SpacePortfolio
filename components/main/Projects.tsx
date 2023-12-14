"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full max-w-screen-lg mx-auto flex flex-wrap justify-center gap-10 px-10">
        {/* First Row of Projects */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/videocall.jpg"
            title="Video Call"
            description="Chat or call your friends or relatives easily using this interactive video-calling web app"
            visitLink="https://github.com/debmalya2003?tab=repositories"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/typingtest.jpg"
            title="Typing Test"
            description="Test your typing, whether speed or accuracy...this web app will do it all in few seconds"
            visitLink="https://example.com/video-call"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/recipeapp.jpg"
            title="Recipe App"
            description="Stuck on a dish never heard of? Don't worry for this app will load the recipe for you in a jiffy"
            visitLink="https://example.com/video-call"
          />
        </div>

        {/* Second Row of Projects */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/snakegame.jpg"
            title="Snake Game"
            description="Revive your childhood with this ever so popular snake game, in an even more interactive format"
            visitLink="https://example.com/video-call"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/battleships.jpg"
            title="Battleships"
            description="Try out your luck in this engrossing game of `Battleships`.Play online or offline"
            visitLink="https://example.com/video-call"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <ProjectCard
            src="/rockpaperscissors.jpg"
            title="Rock-Paper-Scissors"
            description="Test the A.I. in this game of rock-paper-scissors.No worries,it does n't cheat"
            visitLink="https://example.com/video-call"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
