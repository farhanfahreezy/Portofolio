import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { Box, Flex, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./component/navbar/Navbar";
import Taskbar from "./component/taskbar/Taskbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTaskbar, setShowTaskbar] = useState(false);
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hideTaskbar = () => {
    setShowTaskbar(false);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1e1e1e",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 5,
              },
            },
          },
          particles: {
            color: {
              value: "#BCBCBC",
            },
            links: {
              color: "#BCBCBC",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Box
        // bgImage={wallpaper}
        // bgPosition="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
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
          <Show above="md">
            <Taskbar showTaskbar={showTaskbar} hideTaskbar={hideTaskbar} />
          </Show>

          <Box
            h="97.6px"
            position="fixed"
            bottom="0%"
            w="100vw"
            zIndex={2}
            onMouseEnter={() => {
              setShowTaskbar(true);
            }}
          />
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
