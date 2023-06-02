import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const PicSlideshow = () => {
  const pic = [
    { pic: "/pic/me-bg-1.png" },
    { pic: "/pic/me-bg-2.png" },
    { pic: "/pic/me-bg-3.png" },
  ];
  const indexPix = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      indexPix.current = (indexPix.current + 1) % 3;
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Stack direction="column" align="center" position="relative">
      <Box
        w="300px"
        h="300px"
        position="relative"
        borderRadius="50%"
        bgGradient="radial(circle at 50% 150%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 75%)"
        overflow="hidden"
      >
        <Image
          src={pic[indexPix.current].pic}
          top="20%"
          left="-2%"
          position="relative"
        ></Image>
      </Box>
      <Text fontWeight="bold" fontSize="50px" mt="-50px" zIndex={0}>
        Farhan
      </Text>
    </Stack>
  );
};

export default PicSlideshow;
