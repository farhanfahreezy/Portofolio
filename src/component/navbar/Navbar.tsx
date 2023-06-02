import { useState } from "react";
import { Button, Spacer, Stack, HStack, Text, Show } from "@chakra-ui/react";
import Settings from "./Settings";
import SocialSetting from "./SocialSetting";

interface NavbarProps {
  time: Date;
  autoHide: boolean;
  setAuto: () => void;
}

const Navbar = ({ time, autoHide, setAuto }: NavbarProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const showHideSettings = () => {
    setShowSettings((val) => !val);
  };
  const showHideSocial = () => {
    setShowSocial((val) => !val);
  };
  return (
    <>
      <HStack
        w="100vw"
        bg="#131313"
        py={1}
        px={2}
        position="fixed"
        top="0%"
        zIndex={3}
      >
        <Show above="md">
          <Button
            variant="ghost"
            fontWeight="normal"
            w="150px"
            h="30px"
            onClick={showHideSocial}
          >
            farhanfahreezy
          </Button>
        </Show>
        <Spacer />
        <Stack direction="row" maxW="240px" p={0} spacing={3}>
          <Text>
            {time.toLocaleDateString([], {
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Text>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Stack>
        <Spacer />

        <Show above="md">
          <Button
            variant="ghost"
            fontWeight="normal"
            w="150px"
            h="30px"
            onClick={showHideSettings}
          >
            Settings
          </Button>
        </Show>
      </HStack>
      <Settings
        showSettings={showSettings}
        setAuto={setAuto}
        autoHide={autoHide}
        showHideSettings={showHideSettings}
      />
      <SocialSetting showSocial={showSocial} showHideSocial={showHideSocial} />
    </>
  );
};

export default Navbar;
