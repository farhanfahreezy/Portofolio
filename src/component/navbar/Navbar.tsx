import { useState } from "react";
import { Button, Spacer, Stack, HStack, Text, Show } from "@chakra-ui/react";
import Settings from "./Settings";

interface NavbarProps {
  time: Date;
}

const Navbar = ({ time }: NavbarProps) => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <HStack
        w="100vw"
        bg="#131313"
        py={1}
        px={2}
        position="absolute"
        top="0%"
        zIndex={3}
      >
        <Show above="md">
          <Button variant="ghost" fontWeight="normal" w="150px" h="30px">
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
            onClick={() => {
              setShowSettings((val) => !val);
            }}
            // onMouseLeave={() => {
            //   setShowSettings(false);
            // }}
          >
            Settings
          </Button>
        </Show>
      </HStack>
      <Settings showSettings={showSettings} />
    </>
  );
};

export default Navbar;
