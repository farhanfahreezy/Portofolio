import { Box, Text } from "@chakra-ui/react";

interface SettingsProps {
  showSettings: boolean;
}

const Settings = ({ showSettings }: SettingsProps) => {
  return (
    <Box
      bg="#575757"
      position="fixed"
      zIndex={2}
      px={7}
      py={5}
      top={showSettings ? "45px" : 0}
      right="5px"
      opacity={showSettings ? 1 : 0}
      visibility={showSettings ? "visible" : "hidden"}
      transition="opacity 0.2s, top 0.2s"
      boxShadow="2xl"
    >
      <Text>Automatically hide taskbar</Text>
    </Box>
  );
};

export default Settings;
