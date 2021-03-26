import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const posts = () => {
  return (
    <Box marginX={["5", "5", "5", "20"]} marginY="10">
      <Box>
        <Breadcrumb marginBottom={["2", "2", "6"]}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" fontWeight="600" fontSize="xl">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text fontWeight="600" fontSize="xl" color="gray.200">
              Posts
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>
          <Text
            color={["mediumGray.50", "#000000"]}
            fontWeight="700"
            fontSize={["18", "18", "30", "30"]}
          >
            Blog Posts
          </Text>
          <Text
            display={["none", "none", "block"]}
            color={["mediumGray.50", "#000000"]}
            fontWeight="700"
            fontSize={["18", "18", "28", "28"]}
            color="cyan.400"
          >
            Quiero sumarme a la tripulación de Rocket Digital!!
          </Text>
          <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
            Quiero seguir desarrollandome! si me dan esta oportunidad, prometo
            dar lo mejor de mi en este equipo.
          </Text>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
          >
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  cursor="pointer"
                  marginTop="1.5"
                  fontWeight="700"
                  fontSize="18px"
                >
                  Blog Post publication 1
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  marginTop="1.5"
                  fontWeight="700"
                  fontSize="18px"
                  cursor="pointer"
                >
                  Blog Post publication 2
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  marginTop="1.5"
                  fontWeight="700"
                  fontSize="18px"
                  cursor="pointer"
                >
                  Blog Post publication 3
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  marginTop="1.5"
                  cursor="pointer"
                  fontWeight="700"
                  fontSize="18px"
                >
                  Blog Post publication 4
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  marginTop="1.5"
                  cursor="pointer"
                  fontWeight="700"
                  fontSize="18px"
                >
                  Blog Post publication 5
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                marginX="1"
                background="url('img/blog.svg')"
                backgroundSize="cover"
                height="180px"
                maxWidth="400px"
                minWidth="300px"
                marginTop="4"
              ></Box>

              <Box paddingTop="4">
                <Text
                  marginTop="1.5"
                  cursor="pointer"
                  fontWeight="700"
                  fontSize="18px"
                >
                  Blog Post publication 6
                </Text>
                <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                  Author
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default posts;
