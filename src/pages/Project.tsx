import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ProjectPreview from "../component/ProjectPreview";
// import React from "react";

const Project = () => {
  const [titleHover, setTitleHover] = useState(false);
  const projList = [
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
      demo: "https://play15puzzle.vercel.app/",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
    },
    {
      title: "15 Puzzle",
      subtitle:
        "Classic 15 puzzle. The goal for this game is to arrange the tile from 1 to 15",
      image: "project/15puzzle.png",
      repo: "https://github.com/farhanfahreezy/15Puzzle",
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
      <Text fontSize={24}>Here are some of my recent work</Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
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
