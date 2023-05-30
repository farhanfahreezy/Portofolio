// import { useState } from "react";

import { Divider, Stack } from "@chakra-ui/react";
import Task from "./Task";

// interface TaskBarProps{
//   numOfTask : number
//   numOfAdditionalTask : number
// }

const Taskbar = () => {
  const num1 = Array.from([1, 2, 3, 4]);
  const num2 = Array.from([5, 6]);

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
      borderRadius="30px"
      spacing="10px"
      h="97.6px"
    >
      {num1.map((num) => (
        <Task key={num} taskName="Home" />
      ))}
      <Divider orientation="vertical" height="60px" borderColor="white" />
      {num2.map((num) => (
        <Task key={num} taskName="Additional" />
      ))}
    </Stack>
  );
};

export default Taskbar;
