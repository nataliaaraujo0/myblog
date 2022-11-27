import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const resumes = [
  { title: "titulo", subtitle: "subtitle" },
  { title: "titulo", subtitle: "subtitle" },
];
export const Resume = () => {
  return (
    <Stack spacing="4">
      {resumes.map((resume) => (
        <Card bg="purple.800">
          <CardHeader>
            <Heading size="md" color="#ffdc86">
              {" "}
              {resume.title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="#dbd4c1">{resume.subtitle}</Text>
            <UnorderedList>
              <ListItem color="green.400">Lorem ipsum dolor sit amet</ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};
