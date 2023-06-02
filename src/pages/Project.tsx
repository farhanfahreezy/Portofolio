import {
  Grid,
  GridItem,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import ProjectPreview from "../component/ProjectPreview";
// import React from "react";

const Project = () => {
  const [titleHover, setTitleHover] = useState(false);
  const currentBreakpoint = useBreakpointValue({
    xl: "xl",
    lg: "lg",
    sm: "sm",
  });
  const projList = [
    {
      title: "farhanfahreezy | Portofolio",
      subtitle:
        "This is my personal portofolio. I create this web-app to display all of my skill, recent project, and also my latest CV.",
      image: "project/porto.png",
      repo: "https://github.com/farhanfahreezy/Portofolio",
      demo: "https://farhanfahrezy.vercel.app/",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15. Can you beat this game?",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
      demo: "https://play15puzzle.vercel.app/",
    },
    {
      title: "AkinatorGPT",
      subtitle:
        "AkinatorGPT is a chatbot web-app that implements KMP and BM algorithms to provide users with answers to their questions.",
      image: "project/akinator.png",
      repo: "https://github.com/farhanfahreezy/Tubes3_13521058",
      demo: "https://farhanfahreezy.github.io/Tubes3_13521058/",
    },
    {
      title: "Store Organizer",
      subtitle:
        "This desktop app is written in Java and it main functionality is to organize a store. You can add, remove, sell items and also giving rank to customer.",
      image: "project/tubes2oop.png",
      repo: "https://github.com/farhanfahreezy/KEN-Totalitas",
    },
    {
      title: "Finding Home",
      subtitle:
        "Finding Home is a quick problem solver for deciding path between 2 places. This web-app uses UCS and A* algorithm to find the route!",
      image: "project/findinghome.png",
      repo: "https://github.com/farhanfahreezy/Tucil3_UCS_Astar",
    },
    {
      title: "Treasure Hunt Solver",
      subtitle:
        "There is no safe place for a treasure. This desktop app designed to solve a maze with multiple treasure using BFS DFS algorithm.",
      image: "project/treasurehunt.png",
      repo: "https://github.com/farhanfahreezy/Tubes2_braveEagle69",
    },
    {
      title: "Divide & Conquer",
      subtitle:
        "This is a desktop app that i created using python with tkinter. This app generates random point and find the closest pair using DnC or BF.",
      image: "project/dnc.png",
      repo: "https://github.com/farhanfahreezy/Tucil2_13521092_13521106",
    },
    {
      title: "Face Recognition",
      subtitle:
        "Like it's name, this desktop app can recognize a face based on a certain dataset. This app uses eigenvalue to determine the person.",
      image: "project/facerecognition.png",
      repo: "https://github.com/farhanfahreezy/Algeo02-21041",
    },
    {
      title: "Bukan Web Ngebajak",
      subtitle:
        "This is my first web-app project using vanilla Js CSS HTML which displays a list of movies using the TMDB Rest API.",
      image: "project/mvs.png",
      repo: "https://github.com/farhanfahreezy/ProjectWebsiteGDSC-ITB",
      demo: "https://farhanfahreezy.github.io/ProjectWebsiteGDSC-ITB/moviesearchengine.html",
    },
  ];
  return (
    <Stack
      direction="column"
      position="absolute"
      zIndex={1}
      w="100vw"
      align="center"
      paddingX={10}
      top="10vh"
    >
      <Text
        fontSize={48}
        fontWeight="bold"
        onMouseEnter={() => {
          setTitleHover(true);
        }}
        onMouseLeave={() => {
          setTitleHover(false);
        }}
      >
        Recent{" "}
        <Text
          as="span"
          color={titleHover ? "yellow.500" : "white"}
          fontWeight="bold"
          transition="color 0.1s"
        >
          Project
        </Text>
      </Text>
      <Text fontSize={24} mb={5}>
        Here are some of my recent work
      </Text>
      <Grid
        templateColumns={
          currentBreakpoint === "xl"
            ? "repeat(3, 1fr)"
            : currentBreakpoint === "lg"
            ? "repeat(2, 1fr)"
            : "repeat(1,1fr)"
        }
        gap={6}
        justifyItems="center"
        mb="100px"
      >
        {projList.map((proj) => (
          <GridItem>
            <ProjectPreview
              title={proj.title}
              subtitle={proj.subtitle}
              image={proj.image}
              repo={proj.repo}
              demo={proj.demo}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Project;
