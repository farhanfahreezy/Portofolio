import { Stack, Link, StackDirection } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

interface SocialProps {
  size: number;
  spacing: number;
  direction: StackDirection;
  color: string;
}

const Social = ({ size, spacing, direction, color }: SocialProps) => {
  return (
    <Stack direction={direction} spacing={spacing}>
      <Link
        href="https://www.linkedin.com/in/farhanfahreezy/"
        target="_blank"
        _hover={{ color: color }}
      >
        <BsLinkedin size={size} />
      </Link>
      <Link
        href="https://github.com/farhanfahreezy/"
        target="_blank"
        _hover={{ color: color }}
      >
        <BsGithub size={size} />
      </Link>
      <Link
        href="https://www.instagram.com/farhanfahreezy/"
        target="_blank"
        _hover={{ color: color }}
      >
        <BsInstagram size={size} />
      </Link>
    </Stack>
  );
};

export default Social;
