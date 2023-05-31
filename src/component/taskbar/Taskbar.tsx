// import { useState } from "react";

import { Divider, Stack } from "@chakra-ui/react";
import Task from "./Task";

const Taskbar = () => {
  const taskMain = [
    { key: 0, taskName: "Home", iconPath: "/icons/home.png" },
    { key: 1, taskName: "About", iconPath: "/icons/about.png" },
    { key: 2, taskName: "Project", iconPath: "/icons/project.png" },
    { key: 3, taskName: "Resume", iconPath: "/icons/resume.png" },
  ];

  const taskAdditional = [
    { key: 100, taskName: "15Puzzle", iconPath: "/icons/15puzzle.svg" },
  ];

  return (
    <Stack
      direction="row"
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
      bottom="1%"
      align="center"
      justify="center"
      bg="rgba(0,0,0,0.4)"
      p={2}
      borderColor="rgba(255,255,255,0.4)"
      borderWidth="1px"
      borderRadius="20px"
      h="97.6px"
    >
      {taskMain.map((task) => (
        <Task path={task.iconPath} taskName={task.taskName} key={task.key} />
      ))}
      <Divider orientation="vertical" height="60px" borderColor="white" />
      {taskAdditional.map((task) => (
        <Task path={task.iconPath} taskName={task.taskName} key={task.key} />
      ))}
    </Stack>
  );
};

export default Taskbar;
