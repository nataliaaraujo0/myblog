import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { TagGroup } from "../TagGroup";

export const Sidebar = () => {
  return (
    <Box textAlign="center">
      <Image src="https://i.pinimg.com/564x/19/1b/73/191b73f11d39978ba7fc8e18b7f1fa5f.jpg" />
      <Heading>I'm a Heading</Heading>
      <TagGroup />
    </Box>
  );
};
