import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { useRef } from "react";

type SearchProps = {
  onChange?: any;
  value?: any;
};
export const Search = ({ onChange = () => {}, value = "", ...rest }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <InputGroup w="20rem" {...rest}>
        <InputLeftElement
          children={<MagnifyingGlass size={22} weight="bold" />}
        />
        <Input
          value={value}
          name="search"
          type="text"
          onChange={onChange}
          __css={{ color: "blue" }}
          placeholder="Search"
          variant="filled"
          bg="#be396c"
          _hover={{ background: "#e73e80" }}
          _focus={{ background: "#e73e80" }}
          ref={searchInputRef}
        />
      </InputGroup>
    </>
  );
};
