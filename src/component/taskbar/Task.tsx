import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface TaskProps {
  taskName: string;
  path: string;
}

const Task = ({ taskName, path }: TaskProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Stack direction="column" key={taskName}>
      {isHovered && (
        <Text
          position="absolute"
          top="-40%"
          left="50%"
          transform="translateX(-50%)"
          fontSize="18px"
        >
          {taskName}
        </Text>
      )}
      <Button
        boxSize="80px"
        variant="ghost"
        borderRadius="25px"
        _hover={{
          transform: "scale(1.1) translateY(-10px)",
          // bg: "rgba(255,255,255,0.07)",
        }}
        _active={{ transform: "scale(1)", bg: "rgba(255,255,255,0.07)" }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        p={0}
      >
        <Image src={path} boxSize="65px" />
      </Button>
    </Stack>
  );
};

export default Task;
