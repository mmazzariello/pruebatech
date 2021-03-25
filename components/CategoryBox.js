import { Box } from "@chakra-ui/layout";

export const CategoryBox = ({ url }) => {
  return (
    <Box
      maxWidth="380px"
      minWidth="300px"
      background={`url('${url}')`}
      width="32%"
      height="130px"
      borderRadius="xl"
      marginTop="5"
    ></Box>
  );
};
