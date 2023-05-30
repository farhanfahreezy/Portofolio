import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

interface TaskProps {
  taskName: string;
  key: number;
}

const Task = ({ taskName, key }: TaskProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Stack direction="column">
      {isHovered && (
        <Text
          position="absolute"
          top="-30%"
          left="50%"
          transform="translateX(-50%)"
        >
          {taskName}
        </Text>
      )}
      <Button
        key={key}
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
      >
        <AiFillHome size="80px" />
      </Button>
    </Stack>
  );
};

export default Task;
