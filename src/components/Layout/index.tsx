import { Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Sidebar } from "../Sidebar";
import { Search } from "../Search";

type LayoutProps = {
  children: ReactElement;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex w="100%" h="100vh" padding="2rem" gap="2rem" justifyContent="center">
      <Flex w="300px" h="800px">
        <Sidebar />
      </Flex>
      <Flex w="900px" h="800px" direction="column">
        <Search style={{ marginBottom: "32px" }} />
        {children}
      </Flex>
    </Flex>
  );
};
