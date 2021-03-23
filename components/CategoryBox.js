import { Box } from "@chakra-ui/layout";
import React from "react";

export const CategoryBox = ({ url }) => {
  return (
    <Box
      maxWidth="380px"
      minWidth="300px"
      background={`url('${url}')`}
      width="32%"
      height="100px"
      borderRadius="xl"
      marginTop="4"
    />
  );
};
