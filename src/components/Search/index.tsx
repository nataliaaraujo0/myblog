import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Sidebar } from "../Sidebar";
import { MagnifyingGlass } from "phosphor-react";

export const Search = ({ ...rest }) => {
  return (
    <>
      <InputGroup w="20rem" {...rest}>
        <InputLeftElement
          pointerEvents="none"
          children={<MagnifyingGlass size={22} weight="bold" />}
        />
        <Input type="tel" placeholder="Search" />
      </InputGroup>
    </>
  );
};
