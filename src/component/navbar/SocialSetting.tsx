import { Box } from "@chakra-ui/react";
import Social from "../Social";

interface SocialSettingProps {
  showSocial: boolean;
  showHideSocial: () => void;
}

const SocialSetting = ({ showSocial, showHideSocial }: SocialSettingProps) => {
  return (
    <Box
      bg="rgba(19,19,19,0.8)"
      position="fixed"
      zIndex={2}
      px={7}
      py={5}
      top={showSocial ? "55px" : 0}
      left="5px"
      opacity={showSocial ? 1 : 0}
      visibility={showSocial ? "visible" : "hidden"}
      transition="opacity 0.2s, top 0.2s"
      boxShadow="2xl"
      borderRadius={10}
      onMouseLeave={showHideSocial}
    >
      <Social size={40} spacing={5} direction="row" color="green.500" />
    </Box>
  );
};

export default SocialSetting;
