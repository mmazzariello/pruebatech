import Head from "next/head";
import Navbar from "./../components/Navbar";
import Topnav from "./../components/Topnav";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { CategoryBox } from "components/CategoryBox";
import { Carousel } from "components/Carousel";

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
          marginY="8"
          color={["mediumGray.50", "#000000"]}
          fontWeight="700"
          fontSize={["18", "18", "30", "30"]}
        >
          Top 10 Products
        </Text>
        <Carousel></Carousel>
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
          <Box
            color="white"
            display="inline-flex"
            marginX={["5", "5", "20", "20"]}
            flexDirection="column"
            height="100%"
            justifyContent="center"
          >
            <Text
              fontWeight="700"
              fontSize="28px"
              color="#FFFFFF"
              paddingTop={["75px", "75px", "none"]}
            >
              70% off
            </Text>
            <Button
              colorScheme="whiteAlpha"
              variant="solid"
              color={["black", "black", "#FFFFFF"]}
              fontWeight="700"
              fontSize="15px"
              backgroundColor={["#FFFFFF", "#FFFFFF", "orangeBrand.100"]}
              marginTop="1"
              paddingX={["28px", "28px", "16px"]}
              borderRadius="12px"
            >
              SUSCRIBE
            </Button>
          </Box>
        </Box>

        <Box heigth="200px" backgroundColor="#FF723D">
          <Box
            paddingTop={["30px", "30px", "50px"]}
            paddingBottom={["14px", "14px", "70px"]}
            display="flex"
            flexDirection={["column", "row"]}
            marginX={["5", "5", "20", "20"]}
          >
            <Box height="65px" width={["55px", "55px", "65px"]}>
              <img src="/img/newsletter.svg" alt="" />
            </Box>
            <Box maxWidth="600px" color="#FFFFFF" paddingTop={["1", "none"]}>
              <Text fontSize="22px" fontWeight="700">
                Sign up for Newsletter
              </Text>
              <Text fontWeight="400" paddingTop="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Box display="flex" flexDirection={["column", "column", "row"]}>
                <Input
                  placeholder="Enter your email here"
                  backgroundColor="#FFFFFF"
                  marginTop="6"
                  paddingY="6"
                />
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    variant="solid"
                    color="#FFFFFF"
                    fontWeight="700"
                    backgroundColor="black"
                    marginTop="4"
                    display="flex"
                    width="100px"
                    paddingX={["30px", "30px", "16px"]}
                  >
                    <Text fontSize={["15px", "15px", "16px"]}>SUSCRIBE</Text>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        marginX={["5", "5", "20", "20"]}
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        paddingTop="14"
        paddingBottom={["8", "8", "32"]}
      >
        <Box maxWidth={["97%", "97%", "320px"]}>
          <img width="140px" src="img/daitoolblack.svg" alt="" />
          <Text
            marginTop={["4", "4", "8"]}
            fontWeight="400"
            fontSize="14px"
            color="#232323"
          >
            Daitool is the global reference site for high-quality, Japanese
            brand, industrial tools and supplies. We empower clients to build
            better, anywhere in the world.
          </Text>
          <Box
            maxWidth={["none", "none", "300px"]}
            marginTop={["9", "9", "6"]}
            display="flex"
            justifyContent="space-between"
          >
            <img width="50px" src="/img/youtube.svg" alt="" />
            <img width="50px" src="/img/linkedin.svg" alt="" />
            <img width="50px" src="/img/twitter.svg" alt="" />
            <img width="50px" src="/img/facebook.svg" alt="" />
            <img width="50px" src="/img/instagram.svg" alt="" />
          </Box>
        </Box>

        <Box
          display={["block", "block", "none", "none"]}
          display="flex"
          justifyContent="space-between"
          paddingTop={["8", "8", "0"]}
          marginTop="4"
        >
          <Box>
            <Text
              fontWeight="700"
              marginBottom={["4", "4", "8"]}
              fontSize="20px"
            >
              QUICK LINKS
            </Text>
            <ul>
              <li className="footer-spacing">About us</li>
              <li className="footer-spacing">Blog</li>
              <li className="footer-spacing">Shop</li>
              <li className="footer-spacing">Brands</li>
              <li className="footer-spacing">Wholesale</li>
            </ul>
          </Box>
          <Box>
            <Text
              fontWeight="700"
              marginBottom={["4", "4", "8"]}
              fontSize="20px"
            >
              CUSTOMER AREA
            </Text>
            <ul>
              <li className="footer-spacing">My Account</li>
              <li className="footer-spacing">Deliveries</li>
              <li className="footer-spacing">Help Center (FAQs)</li>
              <li className="footer-spacing">Terms</li>
              <li className="footer-spacing">Privacy Policy</li>
            </ul>
          </Box>
        </Box>

        <Box maxWidth="280px">
          <Text
            display={["none", "none", "block", "block"]}
            fontWeight="700"
            marginBottom="8"
            marginTop="4"
            fontSize="20px"
          >
            CONTACT
          </Text>
          <Text
            display={["none", "none", "block", "block"]}
            fontWeight="400"
            fontSize="14px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Text>

          <Box
            display="flex"
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            paddingTop="4"
          >
            <Box>
              <Text
                fontWeight={["700", "700", "normal"]}
                paddingTop={["2", "2", "4"]}
                fontSize="14px"
              >
                Have any questions?
              </Text>
              <Text
                paddingTop="1"
                fontWeight="400"
                color="orangeBrand.100"
                fontSize="14px"
                fontWeight={["500", "500", "normal"]}
              >
                + 123 456 789
              </Text>
            </Box>
            <Box>
              <ButtonGroup
                variant="outline"
                spacing="6"
                paddingTop={["6", "6", "4"]}
              >
                <Button
                  paddingX={["30px", "30px", "16px"]}
                  paddingY={["10px", "10px", "none"]}
                  colorScheme="cyan"
                >
                  <Text fontSize={["14px", "14px", "16px"]}>CONTACT</Text>
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>

      <footer>
        <Box marginX={["5", "5", "20", "20"]}>
          <Box
            display={["none", "none", "block", "block"]}
            borderTop="1px solid"
            borderColor="gray.200"
          ></Box>

          <Box
            display="flex"
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            justifyContent={["none", "none", "space-between"]}
            paddingY="4"
          >
            <Text paddingTop="4">Daitool - © 2021 All Rights Reserved</Text>

            <Box
              display={["block", "block", "none", "none"]}
              borderTop="1px solid"
              borderColor="gray.200"
            ></Box>

            <Box display="flex">
              <Text
                display={["none", "none", "none", "block"]}
                paddingRight="6"
              >
                Payment
              </Text>
              <Box
                fontStyle="italic"
                fontWeight="700"
                fontSize={["16px", "16px", "18px"]}
                display="flex"
                flexDirection="row"
                paddingBottom={["4", "4", "0"]}
              >
                <Text color="blueBrand.200" paddingLeft={["0", "0", "4"]}>
                  VISA
                </Text>
                <Text paddingLeft="4">
                  <span color="rgba(255, 135, 23, 0.65)">MASTER</span>
                  <span color="rgba(255, 135, 23, 0.65)">CARD</span>
                </Text>
                <Text color="blueBrand.100" paddingLeft="4">
                  PAYPAL
                </Text>
                <Text color="orangeBrand.50" paddingLeft="4">
                  BITCOIN
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}
