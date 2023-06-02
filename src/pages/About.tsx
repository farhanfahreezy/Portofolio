import {
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import PicSlideshow from "../component/PicSlideshow";
import { AiFillFire } from "react-icons/ai";

const About = () => {
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  return (
    <Stack
      direction="column"
      position="absolute"
      zIndex={1}
      w="100vw"
      align="center"
      spacing="50px"
      paddingX={10}
      top={currentBreakpoint === "md" ? "20vh" : "8vh"}
    >
      <Stack
        direction={currentBreakpoint === "md" ? "row" : "column"}
        spacing={20}
        align="center"
        // mt={1000}
      >
        <Stack direction="column" align="left">
          <Text fontSize={48} mb={5} fontWeight="bold">
            About Me
          </Text>
          <Text fontSize={24} maxW="800px">
            Hi Everyone!👋 My name is{" "}
            <Text as="span" color="yellow.500" fontWeight="bold">
              Mohammad Farhan Fahrezy
            </Text>
            . I hail from the beautiful city of{" "}
            <Text as="span" color="yellow.500" fontWeight="bold">
              Pekanbaru
            </Text>
            , Riau, Indonesia.
          </Text>
          <Text fontSize={24} maxW="800px">
            At the moment, I am passionately pursuing my Bachelor's Degree in{" "}
            <Text as="span" color="yellow.500" fontWeight="bold">
              Informatics Engineering
            </Text>{" "}
            at Institut Teknologi Bandung.
          </Text>
          <Text fontSize={24} maxW="800px">
            Beyond the realm of coding, here's something i do in free time:
          </Text>
          <List fontSize={24} ml={10}>
            <ListItem>
              <ListIcon as={AiFillFire} color="red.500" />
              Playing Games 🎮
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillFire} color="red.500" />
              Reading Manga 🤓
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillFire} color="red.500" />
              Working Out 💪
            </ListItem>
          </List>
        </Stack>
        <PicSlideshow />
      </Stack>
      <Text fontSize={48} fontWeight="bold">
        Professional Skillset
      </Text>
      <Button>Updated Soon</Button>
      <Text fontSize={48} fontWeight="bold">
        Tools I Use
      </Text>
      <Button>Updated Soon</Button>
    </Stack>
  );
};

export default About;
