import Head from "next/head";
import Navbar from "./../components/Navbar";
import Topnav from "./../components/Topnav";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { CategoryBox } from "components/CategoryBox";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Topnav />
        <Navbar />
      </div>

      <header>
        <Box
          style={{
            background: "url('img/head.svg')",
            backgroundSize: "cover",
            height: "400px",
          }}
        ></Box>
      </header>

      <Box>
        <Box
          paddingX="12"
          paddingY="20"
          marginTop="6"
          marginBottom="3"
          marginX="20"
          borderRadius="2xl"
          background="url('img/products.svg')"
        >
          <Text color="red.600" fontSize="xs">
            VIEWED CATEGORY
          </Text>

          <Text>Highlighted Product</Text>
          <Text>Category</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            euismod tempor incididunt ut labore
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginX="20"
      >
        <CategoryBox url="img/safety.svg" />
        <CategoryBox url="img/janitorial.svg" />
        <CategoryBox url="img/tools.svg" />
        <CategoryBox url="img/woodworking.svg" />
        <CategoryBox url="img/gardening.svg" />
        <CategoryBox url="img/office.svg" />
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginX="20"
        marginTop="6"
      >
        <Box
          borderRadius="base"
          border="2px solid"
          borderColor="gray.100"
          fontSize="sm"
          width="120px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="70px"
        >
          <Text>Efficient</Text>
          <Text color="gray.400" fontSize="xx-small">
            International Shipping
          </Text>
        </Box>
        <Box
          borderRadius="base"
          border="2px solid"
          borderColor="gray.100"
          fontSize="sm"
          width="120px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="70px"
        >
          <Text>High-Quality</Text>
          <Text color="gray.400" fontSize="xx-small">
            Guaranteed
          </Text>
        </Box>
        <Box
          borderRadius="base"
          border="2px solid"
          borderColor="gray.100"
          fontSize="sm"
          width="120px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="70px"
        >
          <Text>Reliable</Text>
          <Text color="gray.400" fontSize="xx-small">
            from $40
          </Text>
        </Box>
        <Box
          borderRadius="base"
          border="2px solid"
          borderColor="gray.100"
          fontSize="sm"
          width="120px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="70px"
        >
          <Text>Global</Text>
          <Text color="gray.400" fontSize="xx-small">
            Ships to 50 countries
          </Text>
        </Box>
        <Box
          borderRadius="base"
          border="2px solid"
          borderColor="gray.100"
          fontSize="sm"
          width="120px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="70px"
        >
          <Text>Customer Focus</Text>
          <Text color="gray.400" fontSize="xx-small">
            from $40
          </Text>
        </Box>
      </Box>

      <Box backgroundColor="backgroundGray.50" marginTop="6" paddingY="5">
        <Box width="500px" margin="auto">
          <Carousel showThumbs={false}>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
            <div>
              <img src="img/safety.svg" />
            </div>
          </Carousel>
        </Box>
      </Box>

      <Box>
        <Text marginX="20" marginTop="10">
          Blog Posts
        </Text>
        <Box display="flex" justifyContent="space-around" marginX="20">
          <Box>
            <CategoryBox url="img/blog.svg" />
            <Text marginTop="1.5">Blog Post publication 1</Text>
            <Text>Author</Text>
          </Box>

          <Box>
            <CategoryBox url="img/blog.svg" />
            <Text marginTop="1.5">Blog Post publication 1</Text>
            <Text>Author</Text>
          </Box>

          <Box>
            <CategoryBox url="img/blog.svg" />
            <Text marginTop="1.5">Blog Post publication 1</Text>
            <Text>Author</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
