import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export const Empty = () => {
  return (
    <Card align="center">
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
    </Card>
  );
};
