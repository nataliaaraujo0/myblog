import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Sidebar } from "../Sidebar";
import { Search } from "../Search";

type LayoutProps = {
  firstChild?: ReactElement;
  secondChild?: ReactElement;
};
export const Layout = ({ firstChild, secondChild }: LayoutProps) => {
  return (
    <Flex w="100%" h="100vh" padding="2rem" gap="2rem" justifyContent="center">
      <Flex w="300px" h="800px">
        <Sidebar />
      </Flex>
      <Flex direction="column">
        <Flex w="900px" direction="column">
          <Search style={{ marginBottom: "32px" }} />

          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab borderRadius="4px">PROJETOS</Tab>
              <Tab borderRadius="4px">CURRICULO</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{firstChild}</TabPanel>
              <TabPanel>{secondChild}</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};
