import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export const Search = ({ ...rest }) => {
  return (
    <>
      <InputGroup w="20rem" {...rest}>
        <InputLeftElement
          children={<MagnifyingGlass size={22} weight="bold" />}
        />
        <Input
          __css={{ color: "blue" }}
          placeholder="Search"
          variant="filled"
          bg="#be396c"
          _hover={{ background: "#e73e80" }}
          _focus={{ background: "#e73e80" }}
        />
      </InputGroup>
    </>
  );
};
