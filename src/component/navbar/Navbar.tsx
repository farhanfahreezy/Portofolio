import { Button, Spacer, Stack, HStack, Text } from "@chakra-ui/react";

interface NavbarProps {
  time: Date;
}

const Navbar = ({ time }: NavbarProps) => {
  return (
    <HStack w="100vw" bg="#131313" py={1} px={2} position="absolute" top="0%">
      <Button variant="ghost" fontWeight="normal" w="150px" h="30px">
        farhanfahreezy
      </Button>
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

      <Button variant="ghost" fontWeight="normal" w="150px" h="30px">
        Icon
      </Button>
    </HStack>
  );
};

export default Navbar;
