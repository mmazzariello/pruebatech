import { CheckIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

const Searchbar = () => {
  return (
    <InputGroup size="sm">
      <Input
        _focus={{
          boxShadow: "none",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        placeholder="Enter amount"
        backgroundColor="white"
        borderRadius="2xl"
      />
      <InputRightElement size="sm" children={<HiSearch color="green.500" />} />
    </InputGroup>
  );
};

export default Searchbar;
