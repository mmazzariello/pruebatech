import { Box, Text } from "@chakra-ui/layout";

export const CategoryBox = ({
  url,
  title = "Title",
  subtitle = "Subtitle",
}) => {
  return (
    <Box
      maxWidth="380px"
      minWidth="300px"
      background={`url('${url}')`}
      width="32%"
      height="130px"
      borderRadius="xl"
      marginTop="5"
    >
      <Box
        borderRadius="xl"
        backgroundColor="rgba(1,1,1,.6)"
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        height="100%"
      >
        <Text color="white" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.300">{subtitle}</Text>
      </Box>
    </Box>
  );
};
