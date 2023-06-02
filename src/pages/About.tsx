import { List, ListItem, ListIcon, Stack, Text } from "@chakra-ui/react";
import PicSlideshow from "../component/PicSlideshow";
import { AiFillFire } from "react-icons/ai";

const About = () => {
  return (
    <Stack
      direction="column"
      position="relative"
      top="10%"
      zIndex={1}
      align="center"
      w="100%"
      spacing="50px"
      py="200px"
      m={10}
    >
      <Stack direction="row" spacing={20} align="center">
        <Stack direction="column" align="left">
          <Text fontSize={48} mb={5} fontWeight="bold">
            About Me
          </Text>
          <Text fontSize={24} maxW="800px">
            Hi Everyone, my name is Mohammad Farhan Fahrezy from Pekanbaru,
            Riau, Indonesia.
          </Text>
          <Text fontSize={24} maxW="800px" mb={5}>
            I am currently pursuing my Bachelor Degree in Informatics
            Engineering at Institut Teknologi Bandung.
          </Text>
          <Text fontSize={24} maxW="800px">
            Apart from coding, some other activities that I love to do :
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
              Sleep 😴
            </ListItem>
          </List>
        </Stack>
        <PicSlideshow />
      </Stack>
      <Text fontSize={48} fontWeight="bold">
        Professional Skillset
      </Text>
      <Text fontSize={48} fontWeight="bold">
        Tools I Use
      </Text>
    </Stack>
  );
};

export default About;
