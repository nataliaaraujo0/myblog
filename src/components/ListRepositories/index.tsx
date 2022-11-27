import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TagGroup } from "../TagGroup";
export const ListRepositories = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      >
        <Card bg="purple.800">
          <CardHeader>
            <Heading size="md" color="#ffdc86">
              Customer dashboard
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="#dbd4c1">
              View a summary of all your customers over the last month.
            </Text>
            <TagGroup />
          </CardBody>
          <CardFooter>
            <Badge variant="outline" colorScheme="green">
              Link do deploy
            </Badge>
          </CardFooter>
        </Card>
        <Card bg="purple.800">
          <CardHeader>
            <Heading size="md" color="#ffdc86">
              Customer dashboard
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="#dbd4c1">
              View a summary of all your customers over the last month.
            </Text>
            <TagGroup />
          </CardBody>
          <CardFooter>
            <Badge variant="outline" colorScheme="green">
              Link do deploy
            </Badge>
          </CardFooter>
        </Card>
        <Card bg="purple.800">
          <CardHeader>
            <Heading size="md" color="#ffdc86">
              Customer dashboard
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="#dbd4c1">
              View a summary of all your customers over the last month.
            </Text>
            <TagGroup />
          </CardBody>
          <CardFooter>
            <Badge variant="outline" colorScheme="green">
              Link do deploy
            </Badge>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};
