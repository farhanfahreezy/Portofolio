import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./component/navbar/Navbar";
import Taskbar from "./component/taskbar/Taskbar";
import wallpaper from "./assets/bg.jpg";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Box
        bgImage={wallpaper}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100vw"
        h="100vh"
      >
        <Flex align="center">
          <Navbar time={currentTime} />
          <Taskbar />
        </Flex>
      </Box>
      {/* <VStack h="100vh" w="100vw">
        <Navbar time={currentTime} />
        <Taskbar />
      </VStack> */}
    </>
  );
};

export default App;
