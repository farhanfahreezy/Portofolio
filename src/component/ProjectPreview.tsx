import {
  Button,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";

interface ProjectPreviewProps {
  title: string;
  subtitle: string;
  image: string;
  repo: string;
  demo?: string;
}

const ProjectPreview = ({
  title,
  subtitle,
  image,
  repo,
  demo,
}: ProjectPreviewProps) => {
  const currentBreakpoint = useBreakpointValue({
    xl: "xl",
    md: "md",
    sm: "sm",
  });
  return (
    <VStack
      maxW="400px"
      h={currentBreakpoint !== "sm" ? "420px" : "380px"}
      justify="center"
      p={3}
      bg="rgba(19,19,19,0.8)"
      borderRadius={10}
      justifyContent="flex-start"
      _hover={{ transform: "scale(1.02)" }}
      transition="transform 0.1s ease-in-out"
      position="relative"
    >
      <Image src={image} borderRadius={10} />
      <Text fontWeight="bold" fontSize={24}>
        {title}
      </Text>
      <Text fontSize={currentBreakpoint !== "sm" ? 16 : 14}>{subtitle}</Text>
      <HStack
        justifyItems="space-between"
        position="absolute"
        bottom={3}
        left={3}
        right={3}
      >
        <Button
          onClick={() => {
            window.open(repo);
          }}
          _hover={{ transform: "scale(1.02)", bg: "yellow.500" }}
        >
          <BsGithub /> <Text marginLeft={2}> Source Code</Text>
        </Button>

        {demo && (
          <>
            <Spacer />
            <Button
              onClick={() => {
                window.open(demo);
              }}
            >
              <IoLogoGameControllerB /> <Text marginLeft={2}>Try</Text>
            </Button>
          </>
        )}
      </HStack>
    </VStack>
  );
};

export default ProjectPreview;
