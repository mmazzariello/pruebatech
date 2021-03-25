import Head from "next/head";
import Navbar from "./../components/Navbar";
import Topnav from "./../components/Topnav";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { CategoryBox } from "components/CategoryBox";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <Box>
          <Topnav />
        </Box>
        <Box display={["none", "none", "none", "block"]}>
          <Navbar />
        </Box>
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
          // display={["none", "none", "none", "block"]}
          paddingLeft="6"
          paddingRight="4"
          paddingTop="14"
          paddingBottom="12"
          marginTop="6"
          marginBottom="3"
          marginX={["5", "5", "5", "20"]}
          borderRadius="2xl"
          background="url('img/products.svg')"
        >
          <Text
            display={["block", "block", "none", "none"]}
            color="orangeBrand.100"
            fontSize="md"
            fontWeight="800"
          >
            MOST VIEWED CATEGORY
          </Text>
          <Text
            display={["none", "none", "block", "block"]}
            color="orangeBrand.100"
            fontSize="md"
            fontWeight="800"
          >
            VIEWED CATEGORY
          </Text>

          <Text fontWeight="700" fontSize="24px" paddingTop="1">
            Highlighted Product Category
          </Text>
          <Text fontWeight="400" fontSize="15px" paddingTop="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            euismod
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
        marginX={["5", "5", "20", "20"]}
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
          marginTop={["2", "none", "none", "none"]}
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
          marginTop={["2", "none", "none", "none"]}
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
          marginTop={["2", "none", "none", "none"]}
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
          marginTop={["2", "none", "none", "none"]}
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
          marginTop={["2", "none", "none", "none"]}
        >
          <Text>Customer Focus</Text>
          <Text color="gray.400" fontSize="xx-small">
            from $40
          </Text>
        </Box>
      </Box>

      <Box>
        <Text
          marginX={["5", "5", "20", "20"]}
          marginTop="10"
          color={["mediumGray.50", "#000000"]}
          fontWeight="700"
          fontSize={["18", "18", "30", "30"]}
        >
          Blog Posts
        </Text>

        <Box
          display="flex"
          justifyContent="space-around"
          marginX="20"
          flexWrap="wrap"
          paddingY="5"
        >
          <Box display="flex" flexDirection="column">
            <Box
              marginX={["5", "5", "20", "20"]}
              background="url('img/blog.svg')"
              backgroundSize="cover"
              height="180px"
              maxWidth="400px"
              minWidth="300px"
              width="32%"
              marginTop="4"
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5" fontWeight="700" fontSize="18px">
                Blog Post publication 1
              </Text>
              <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                Author
              </Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              marginX={["5", "5", "20", "20"]}
              background="url('img/blog.svg')"
              backgroundSize="cover"
              height="180px"
              maxWidth="400px"
              minWidth="300px"
              width="32%"
              marginTop="4"
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5" fontWeight="700" fontSize="18px">
                Blog Post publication 1
              </Text>
              <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                Author
              </Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              marginX={["5", "5", "20", "20"]}
              background="url('img/blog.svg')"
              backgroundSize="cover"
              height="180px"
              maxWidth="400px"
              minWidth="300px"
              width="32%"
              marginTop="4"
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5" fontWeight="700" fontSize="18px">
                Blog Post publication 1
              </Text>
              <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                Author
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          background="url('img/footer.svg')"
          backgroundSize="cover"
          height="250px"
        >
          <Box marginX={["5", "5", "20", "20"]}>
            <Text fontWeight="700" fontSize="32px" color="#FFFFFF">
              70% off
            </Text>
            <Button
              colorScheme="whiteAlpha"
              variant="solid"
              color="black"
              fontWeight="700"
              fontSize="15px"
            >
              SUSCRIBE
            </Button>
          </Box>
        </Box>

        <Box heigth="200px" backgroundColor="#FF723D">
          <Box
            paddingY="10"
            display="flex"
            flexDirection={["column", "row"]}
            marginX={["5", "5", "20", "20"]}
          >
            <Box height="65px" width="65px">
              <img src="/img/newsletter.svg" alt="" />
            </Box>
            <Box maxWidth="600px" color="#FFFFFF" paddingTop={["4", "none"]}>
              <Text fontSize="22px" fontWeight="700">
                Sign up for Newsletter
              </Text>
              <Text fontWeight="400" paddingTop="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Input
                placeholder="Enter your email here"
                backgroundColor="#FFFFFF"
                marginTop="6"
                paddingY="6"
              />
              <Button
                variant="solid"
                color="#FFFFFF"
                fontWeight="700"
                fontSize="15px"
                backgroundColor="black"
                marginTop="4"
              >
                SUSCRIBE{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        marginX="20"
        display="flex"
        justifyContent="space-between"
        paddingTop="14"
        paddingBottom="32"
      >
        <Box maxWidth="370px">
          <img src="img/daitoolblack.svg" alt="" />
          <Text marginTop="8" fontWeight="400" color="#232323">
            Daitool is the global reference site for high-quality, Japanese
            brand, industrial tools and supplies. We empower clients to build
            better, anywhere in the world.
          </Text>
          <Box marginTop="6" display="flex" justifyContent="space-between">
            <img width="60px" src="/img/youtube.svg" alt="" />
            <img width="60px" src="/img/linkedin.svg" alt="" />
            <img width="60px" src="/img/twitter.svg" alt="" />
            <img width="60px" src="/img/facebook.svg" alt="" />
            <img width="60px" src="/img/instagram.svg" alt="" />
          </Box>
        </Box>
        <Box maxWidth="200px">
          <Text fontWeight="700" marginBottom="5" marginTop="4" fontSize="20px">
            QUICK LINKS
          </Text>
          <ul marginY="8">
            <li>About us</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Brands</li>
            <li>Wholesale</li>
          </ul>
        </Box>
        <Box maxWidth="200px">
          <Text fontWeight="700" marginBottom="5" marginTop="4" fontSize="20px">
            CUSTOMER AREA
          </Text>
          <ul>
            <li>My Account</li>
            <li>Deliveries</li>
            <li>Help Center (FAQs)</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>

        <Box maxWidth="200px">
          <Text fontWeight="700" marginBottom="5" marginTop="4" fontSize="20px">
            CONTACT
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Text>
          <Text>Have any questions?</Text>
          <Text color="orangeFont.100">+ 123 456 789</Text>
          <ButtonGroup variant="outline" spacing="6">
            <Button colorScheme="cyan">Save</Button>
          </ButtonGroup>
        </Box>
      </Box>

      <footer>
        <Box borderTop="1px solid" borderColor="gray.200"></Box>

        <Box
          display="flex"
          justifyContent="space-between"
          marginX="20"
          paddingY="6"
        >
          <Text>Daitool - © 2021 All Rights Reserved</Text>
          <Box display="flex">
            <Text paddingRight="6">Payment</Text>
            <Text paddingLeft="4">VISA</Text>
            <Text paddingLeft="4">MASTERCARD</Text>
            <Text paddingLeft="4">PAYPAL</Text>
            <Text paddingLeft="4">BITCOIN</Text>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}
