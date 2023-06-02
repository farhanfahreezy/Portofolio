import { useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import SlideShowText from "../component/SlideShowText";
import Social from "../component/Social";

const Home = () => {
  const [titleHover, setTitleHover] = useState(false);
  const [subtitleHover, setsubtitleHover] = useState(false);
  return (
    <Stack
      direction="column"
      h="100vh"
      w="100vw"
      zIndex={1}
      align="center"
      justify="center"
      spacing={0}
    >
      <Stack direction="row">
        <SlideShowText
          text={[
            "Hello",
            "こんにちわ",
            "Hola",
            "안녕",
            "Bonjour",
            "سلام علیکم",
          ]}
          fontSize="48px"
          fontWeight="bold"
          delay={2000}
        />
        <Text fontSize={48}>👋🏻</Text>
      </Stack>

      <Text
        fontSize={48}
        fontWeight="bold"
        pb={5}
        onMouseEnter={() => {
          setTitleHover(true);
        }}
        onMouseLeave={() => {
          setTitleHover(false);
        }}
      >
        I'm{" "}
        <Text
          as="span"
          color={titleHover ? "yellow.500" : "white"}
          fontWeight="bold"
          transition="color 0.1s"
        >
          Farhan
        </Text>
      </Text>
      <Text
        fontSize={24}
        maxW="600px"
        textAlign="center"
        onMouseEnter={() => {
          setsubtitleHover(true);
        }}
        onMouseLeave={() => {
          setsubtitleHover(false);
          false;
        }}
      >
        Undergraduate{" "}
        <Text
          as="span"
          color={subtitleHover ? "yellow.500" : "white"}
          transition="color 0.1s"
        >
          Informatics Engineering
        </Text>{" "}
        Student at Institute of Technology Bandung
      </Text>
      <Text fontSize={20} mt={10} mb={2}>
        Find me on
      </Text>
      <Box bg="#131313" px={8} py={6} borderRadius={10} justifySelf="center">
        <Social size={40} direction="row" color="green.300" spacing={7} />
      </Box>
    </Stack>
  );
};

export default Home;
