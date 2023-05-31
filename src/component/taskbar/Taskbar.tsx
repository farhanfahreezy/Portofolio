// import { useState } from "react";

import { Divider, Stack } from "@chakra-ui/react";
import Task from "./Task";

interface TaskbarProps {
  showTaskbar: boolean;
  hideTaskbar: () => void;
}

const Taskbar = ({ showTaskbar, hideTaskbar }: TaskbarProps) => {
  const taskMain = [
    {
      key: 0,
      taskName: "Home",
      iconPath: "/icons/home.png",
      action: () => {
        console.log("Home");
      },
    },
    {
      key: 1,
      taskName: "About",
      iconPath: "/icons/about.png",
      action: () => {
        console.log("About");
      },
    },
    {
      key: 2,
      taskName: "Project",
      iconPath: "/icons/project.png",
      action: () => {
        console.log("Project");
      },
    },
    {
      key: 3,
      taskName: "Resume",
      iconPath: "/icons/resume.png",
      action: () => {
        console.log("Resume");
      },
    },
  ];

  const taskAdditional = [
    {
      key: 100,
      taskName: "15Puzzle",
      iconPath: "/icons/15puzzle.svg",
      action: () => {
        console.log("15Puzzle");
      },
    },
  ];

  return (
    <Stack
      direction="row"
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
      bottom={showTaskbar ? "1%" : "0%"}
      align="center"
      justify="center"
      bg="rgba(0,0,0,0.4)"
      p={2}
      borderColor="rgba(255,255,255,0.4)"
      borderWidth="1px"
      borderRadius="20px"
      h="97.6px"
      zIndex={2}
      visibility={showTaskbar ? "visible" : "hidden"}
      transition="visibility 0.1s, bottom 0.1s ease-in-out"
      onMouseLeave={hideTaskbar}
    >
      {taskMain.map((task) => (
        <Task
          path={task.iconPath}
          taskName={task.taskName}
          key={task.key}
          action={task.action}
        />
      ))}
      <Divider orientation="vertical" height="60px" borderColor="white" />
      {taskAdditional.map((task) => (
        <Task
          path={task.iconPath}
          taskName={task.taskName}
          key={task.key}
          action={task.action}
        />
      ))}
    </Stack>
  );
};

export default Taskbar;
