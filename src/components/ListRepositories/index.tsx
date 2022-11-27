import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
export const ListRepositories = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
          </CardBody>
          <CardFooter>
            <Badge variant="outline" colorScheme="green">
              Default
            </Badge>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};
