import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./component/navbar/Navbar";
import Taskbar from "./component/taskbar/Taskbar";
import wallpaper from "./assets/bg.jpg";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPage, setSelectedPage] = useState("Home");

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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="resume" element={<Resume />}></Route>
          </Routes>
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
