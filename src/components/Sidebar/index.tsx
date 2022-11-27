import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { TagGroup } from "../TagGroup";

export const Sidebar = () => {
  return (
    <Box textAlign="center">
      <Image src="/avatar.jpg" borderRadius="0.3rem" />
      <Heading marginBottom="2rem">I'm a Heading</Heading>
      <TagGroup />
    </Box>
  );
};
