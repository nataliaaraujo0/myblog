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

export interface IExperience {
  id: number;
  company?: string;
  startDate?: string;
  tasks?: string[];
  endDate?: string;
}

interface ExperienceProps {
  experiences?: IExperience[];
}

export const Experience = ({ experiences = [] }: ExperienceProps) => {
  return (
    <Stack spacing="4">
      {experiences?.map((experience) => (
        <Card bg="purple.800" key={experience.id}>
          <CardHeader>
            <Heading size="md" color="#ffdc86">
              {experience.company}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="#dbd4c1">{experience.startDate}</Text>
            <UnorderedList>
              <ListItem color="green.400">{experience.tasks}</ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};
