import {
  Button,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TaskProps {
  taskName: string;
  path: string;
  action: () => void;
  route: string;
}

const Task = ({ taskName, path, action, route }: TaskProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentBreakpoint = useBreakpointValue({ md: "md" });
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
      <Link to={route}>
        <Button
          boxSize={currentBreakpoint === "md" ? "80px" : "60px"}
          variant="ghost"
          // borderRadius="25px"
          _hover={{
            transform: "scale(1.1) translateY(-10px)",
            // bg: "rgba(255,255,255,0.07)",
          }}
          _active={{ transform: "scale(1)" }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          p={0}
          onClick={action}
        >
          <Image
            src={path}
            boxSize={currentBreakpoint === "md" ? "65px" : "48.75px"}
          />
        </Button>
      </Link>
    </Stack>
  );
};

export default Task;
