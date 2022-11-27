import { Box, Image, Tag, TagLabel } from "@chakra-ui/react";

const tags = [
  { id: 1, title: "React Js", icon: "/react.svg" },
  { id: 2, title: "Typescript", icon: "/typescript.svg" },
  { id: 2, title: "Typescript", icon: "/typescript.svg" },
];
export const TagGroup = () => {
  return (
    <>
      <Tag size="lg" colorScheme="red" borderRadius="full" margin="2px">
        <Image src="/typescript.svg" alt="Dan Abramov" w="30px" />
        <TagLabel>asdasd</TagLabel>
      </Tag>
      <Tag size="lg" colorScheme="red" borderRadius="full" margin="2px">
        <Image src="/typescript.svg" alt="Dan Abramov" w="30px" />
        <TagLabel>asdasd</TagLabel>
      </Tag>
      <Tag size="lg" colorScheme="red" borderRadius="full" margin="2px">
        <Image src="/graphql.svg" alt="Dan Abramov" w="30px" />
        <TagLabel>asdasd</TagLabel>
      </Tag>
    </>
  );
};
