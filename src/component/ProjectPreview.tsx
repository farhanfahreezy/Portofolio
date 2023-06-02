import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
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
  return (
    <VStack
      w="300px"
      justify="center"
      p={3}
      bg="rgba(0,255,255,0.5)"
      borderRadius={10}
      _hover={{ transform: "scale(1.02)" }}
      transition="transform 0.1s ease-in-out"
    >
      <Image src={image} borderRadius={10} />
      <Text fontWeight="bold" fontSize={24}>
        {title}
      </Text>
      <Text>{subtitle}</Text>
      <HStack>
        <Button
          onClick={() => {
            window.open(repo);
          }}
        >
          <BsGithub /> <Text marginLeft={2}> Source Code</Text>
        </Button>
        {demo && (
          <Button
            onClick={() => {
              window.open(demo);
            }}
          >
            <IoLogoGameControllerB /> <Text marginLeft={2}>Try</Text>
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default ProjectPreview;
