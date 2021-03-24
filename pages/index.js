import Head from "next/head";
import Navbar from "./../components/Navbar";
import Topnav from "./../components/Topnav";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import { CategoryBox } from "components/CategoryBox";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home</title>
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
          // display={["none", "none", "none", "block"]}
          paddingX="12"
          paddingY="20"
          marginTop="6"
          marginBottom="3"
          marginX={["3", "3", "20"]}
          borderRadius="2xl"
          background="url('img/products.svg')"
        >
          <Text
            display={["block", "block", "none", "none"]}
            color="orangeBrand"
            fontSize="xs"
          >
            MOST VIEWED CATEGORY
          </Text>
          <Text
            display={["none", "none", "block", "block"]}
            color="orangeBrand"
            fontSize="xs"
          >
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

      <Box>
        <Text marginX="20" marginTop="10">
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
              style={{
                background: "url('img/blog.svg')",
                backgroundSize: "cover",
                height: "180px",
                maxWidth: "400px",
                minWidth: "300px",
                width: "32%",
                marginTop: "4",
              }}
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5">Blog Post publication 1</Text>
              <Text>Author</Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              style={{
                background: "url('img/blog.svg')",
                backgroundSize: "cover",
                height: "180px",
                maxWidth: "400px",
                minWidth: "300px",
                width: "32%",
                marginTop: "4",
              }}
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5">Blog Post publication 1</Text>
              <Text>Author</Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              style={{
                background: "url('img/blog.svg')",
                backgroundSize: "cover",
                height: "180px",
                maxWidth: "400px",
                minWidth: "300px",
                width: "32%",
                marginTop: "4",
              }}
            ></Box>
            <Box paddingTop="4">
              <Text marginTop="1.5">Blog Post publication 1</Text>
              <Text>Author</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          style={{
            background: "url('img/footer.svg')",
            backgroundSize: "cover",
            height: "250px",
          }}
        ></Box>

        <Box heigth="200px" backgroundColor="#FF723D">
          <Box marginX="20" paddingY="10" display="flex">
            <Box height="65px" width="65px">
              <img src="/img/newsletter.svg" alt="" />
            </Box>
            <Box maxWidth="600px" color="#FFFFFF">
              <Text>Sign up for Newsletter</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
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
        <Box maxWidth="200px">
          <img src="img/daitoolblack.svg" alt="" />
          <Text>
            Daitool is the global reference site for high-quality, Japanese
            brand, industrial tools and supplies. We empower clients to build
            better, anywhere in the world.
          </Text>
          <Box display="flex" justifyContent="space-between">
            <img src="/img/youtube.svg" alt="" />
            <img src="/img/linkedin.svg" alt="" />
            <img src="/img/twitter.svg" alt="" />
            <img src="/img/facebook.svg" alt="" />
            <img src="/img/instagram.svg" alt="" />
          </Box>
        </Box>
        <Box maxWidth="200px">
          <Text>QUICK LINKS</Text>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Brands</li>
            <li>Wholesale</li>
          </ul>
        </Box>
        <Box maxWidth="200px">
          <Text>CUSTOMER AREA</Text>
          <ul>
            <li>My Account</li>
            <li>Deliveries</li>
            <li>Help Center (FAQs)</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>

        <Box maxWidth="200px">
          <Text>CONTACT</Text>
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
