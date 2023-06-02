import { Box, Switch, Text } from "@chakra-ui/react";

interface SettingsProps {
  showSettings: boolean;
  autoHide: boolean;
  setAuto: () => void;
  showHideSettings: () => void;
}

const Settings = ({
  showSettings,
  autoHide,
  setAuto,
  showHideSettings,
}: SettingsProps) => {
  return (
    <Box
      bg="rgba(19,19,19,0.8)"
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
      borderRadius={10}
      onMouseLeave={showHideSettings}
    >
      <Box bg="rgba(255,255,255,0.1)" p={2} borderRadius={5} px={5}>
        <Text>Automatically hide taskbar</Text>{" "}
        <Switch colorScheme="teal" isChecked={autoHide} onChange={setAuto} />
      </Box>
    </Box>
  );
};

export default Settings;
