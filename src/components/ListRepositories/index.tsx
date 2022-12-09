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
import { useState } from "react";
import { ListRepositoriesProps } from "../../interfaces/repo.interface";
import { Search } from "../Search";
import { TagGroup } from "../TagGroup";

export const ListRepositories = ({
  repos = [],
  onClick,
  ...rest
}: ListRepositoriesProps) => {
  const [search, setSearch] = useState("");

  const filteredRepos =
    search.length > 0
      ? repos.repos?.filter((repo) => repo.name.includes(search))
      : [];

  return (
    <>
      <Search
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={{ marginBottom: "1rem" }}
      />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      >
        {search.length > 0 ? (
          <>
            {filteredRepos?.map((repo) => {
              return (
                <Card bg="purple.800" onClick={onClick} key={repo.id} {...rest}>
                  <CardHeader>
                    <Heading size="md" color="#ffdc86">
                      {repo.name}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text color="#dbd4c1">{repo.description}</Text>
                    {/*  <TagGroup /> */}
                  </CardBody>

                  <CardFooter w="30px">
                    <Badge variant="outline" colorScheme="green">
                      link vercel
                    </Badge>
                  </CardFooter>
                </Card>
              );
            })}
          </>
        ) : (
          <>
            {repos.repos?.map((repo) => {
              return (
                <Card bg="purple.800" onClick={onClick} key={repo.id} {...rest}>
                  <CardHeader>
                    <Heading size="md" color="#ffdc86">
                      {repo.name}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text color="#dbd4c1">{repo.description}</Text>
                    {/*  <TagGroup /> */}
                  </CardBody>

                  <CardFooter w="30px">
                    <Badge variant="outline" colorScheme="green">
                      link vercel
                    </Badge>
                  </CardFooter>
                </Card>
              );
            })}
          </>
        )}
      </SimpleGrid>
    </>
  );
};
