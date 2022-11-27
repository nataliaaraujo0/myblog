import { Avatar, Box, Tag, TagLabel } from "@chakra-ui/react";

const tags = [
  { title: "React", img: "/react.svg" },
  { title: "Typesscript", img: "/typescript.svg" },
  { title: "Styled Component", img: "/styledcomponent.svg" },
  { title: "GraphQl", img: "/graphql.svg" },
  { title: "NextJs", img: "/next.svg" },
];

type tags = {
  title: string;
  img: string;
};
type TagGroupProps = {
  tags: tags[];
};
export const TagGroup = ({}: TagGroupProps) => {
  return (
    <Box>
      {tags.map((tag) => {
        return (
          <Tag size="lg" variant="outline" bg="purple.800" margin="2px">
            <Avatar src={tag.img} size="xs" ml={-1} mr={2} />
            <TagLabel>{tag.title}</TagLabel>
          </Tag>
        );
      })}
    </Box>
  );
};
