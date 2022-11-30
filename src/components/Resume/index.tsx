import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Highlight,
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
  occupation?: string;
}

interface ExperienceProps {
  experiences?: IExperience[];
}

export const Experience = ({ experiences = [] }: ExperienceProps) => {
  return (
    <Stack spacing="4">
      {experiences?.map((experience) => (
        <Card bg="purple.800" padding="1rem" key={experience.id}>
          <Flex alignItems="center">
            <Heading size="md" color="#ffdc86" marginRight="0.5rem">
              {experience.company}
            </Heading>
            <Text fontWeight="semibold" color="#df82a6" marginRight="0.5rem">
              - {experience.occupation}
            </Text>

            <Text color="#b1b0ae">
              ( {experience.startDate} - {experience.endDate} )
            </Text>
          </Flex>

          <CardBody>
            <UnorderedList>
              <ListItem color="green.400">{experience.tasks}</ListItem>
            </UnorderedList>
            {/*  <Badge colorScheme="green">Success</Badge> */}
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};
