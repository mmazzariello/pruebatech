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
import { CarouselBlog } from "components/CarouselBlog";
import Link from "next/link";

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
          background="url('img/head.svg')"
          backgroundSize="cover"
          height="400px"
          backgroundPosition="46% 30%"
        >
          <Box
            marginX={["5", "5", "5", "20"]}
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent={["flex-end", "flex-end", "flex-end", "center"]}
            textAlign="end"
            alignItems="flex-end"
            color="#FFFFFF"
            paddingRight={["none", "none", "4", "24"]}
          >
            <Text fontSize="40px" fontWeight="700">
              New Products
            </Text>
            <Text fontSize="36px" fontWeight="200">
              Japan
            </Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              color="orangeBrand.100"
              marginTop={["4px"]}
              paddingBottom={["12", "12", "none"]}
              decoration="underline"
              cursor="pointer"
            >
              Discover now
            </Text>
          </Box>
        </Box>
      </header>

      <Box>
        <Box
          paddingLeft="6"
          paddingRight="4"
          paddingTop="14"
          paddingBottom="12"
          marginTop="6"
          marginBottom="3"
          marginX={["5", "5", "5", "20"]}
          borderRadius="2xl"
          background="url('img/products.svg')"
          backgroundPosition={["60% 70%", "70% 50%", "70% 50%", "70% 100%"]}
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
        marginX={["5", "5", "5", "20"]}
      >
        <CategoryBox title="Safety" url="img/safety.svg" />
        <CategoryBox title="Janitorial" url="img/janitorial.svg" />
        <CategoryBox title="Tools" url="img/tools.svg" />
        <CategoryBox title="Woodworking" url="img/woodworking.svg" />
        <CategoryBox title="Gardening" url="img/gardening.svg" />
        <CategoryBox title="Office supplies" url="img/office.svg" />
      </Box>

      <Box marginX={["5", "5", "20", "20"]}>
        <Text
          marginTop="8"
          marginBottom="4"
          color={["mediumGray.50", "#000000"]}
          fontWeight="700"
          fontSize={["18", "18", "30", "30"]}
          display={["block", "block", "none"]}
        >
          Our Brands
        </Text>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          marginTop="8"
        >
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/pentrel.svg" alt="" />
          </Box>
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/vessel.svg" alt="" />
          </Box>
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/olfa.svg" alt="" />
          </Box>
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/anex.svg" alt="" />
          </Box>
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/mitutoyo.svg" alt="" />
          </Box>
          <Box
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
            marginX="4"
          >
            <img src="/img/brands/toyo.svg" alt="" />
          </Box>
        </Box>
      </Box>

      <Text
        marginX={["5", "5", "20", "20"]}
        marginTop="10"
        marginBottom="8"
        color={["mediumGray.50", "#000000"]}
        fontWeight="700"
        fontSize={["18", "18", "30", "30"]}
        display={["block", "block", "none"]}
      >
        Daitool Promise
      </Text>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginX={["5", "5", "20", "20"]}
        marginTop="6"
        marginBottom="10"
        paddingBottom="4"
        paddingX="4"
      >
        <Box marginTop={["4", "none"]}>
          <Box
            borderRadius="base"
            border="2px solid"
            borderColor={["#FFFFFF", "#FFFFFF", "gray.100"]}
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
          >
            <Box marginTop="-25px" display="flex" justifyContent="center">
              <img src="/img/conversation.svg" alt="" />
            </Box>
            <Text fontWeight="700">Efficient</Text>
            <Text color="gray.400" fontSize="xx-small">
              International Shipping
            </Text>
          </Box>
        </Box>

        <Box marginTop={["4", "none"]}>
          <Box
            borderRadius="base"
            border="2px solid"
            borderColor={["#FFFFFF", "#FFFFFF", "gray.100"]}
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
          >
            <Box marginTop="-25px" display="flex" justifyContent="center">
              <img src="/img/hight2.svg" alt="" />
            </Box>

            <Text fontWeight="700">High-Quality</Text>
            <Text color="gray.400" fontSize="xx-small">
              Guaranteed
            </Text>
          </Box>
        </Box>

        <Box marginTop={["4", "none"]}>
          <Box
            borderRadius="base"
            border="2px solid"
            borderColor={["#FFFFFF", "#FFFFFF", "gray.100"]}
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
          >
            <Box marginTop="-25px" display="flex" justifyContent="center">
              <img src="/img/hight.svg" alt="" />
            </Box>

            <Text fontWeight="700">Reliable</Text>
            <Text color="gray.400" fontSize="xx-small">
              from $40
            </Text>
          </Box>
        </Box>

        <Box marginTop={["4", "none"]}>
          <Box
            borderRadius="base"
            border="2px solid"
            borderColor={["#FFFFFF", "#FFFFFF", "gray.100"]}
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
          >
            <Box marginTop="-25px" display="flex" justifyContent="center">
              <img src="/img/world.svg" alt="" />
            </Box>

            <Text fontWeight="700">Global</Text>
            <Text color="gray.400" fontSize="xx-small">
              Ships to 50 countries
            </Text>
          </Box>
        </Box>

        <Box marginTop={["4", "none"]}>
          <Box
            borderRadius="base"
            border="2px solid"
            borderColor={["#FFFFFF", "#FFFFFF", "gray.100"]}
            fontSize="sm"
            width="120px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="70px"
          >
            <Box marginTop="-25px" display="flex" justifyContent="center">
              <img src="/img/avatar.svg" alt="" />
            </Box>
            <Text fontWeight="700">Customer Focus</Text>
            <Text color="gray.400" fontSize="xx-small">
              from $40
            </Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text
          marginX={["5", "5", "20", "20"]}
          marginY="8"
          color={["mediumGray.50", "#000000"]}
          fontWeight="700"
          fontSize={["18", "18", "30", "30"]}
          display={["block", "block", "none"]}
        >
          Top 10 Products
        </Text>

        <Carousel></Carousel>
      </Box>

      <Box display={["block", "block", "none", "none"]}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="10"
          marginX={["5", "5", "20", "20"]}
        >
          <Text
            color={["mediumGray.50", "#000000"]}
            fontWeight="700"
            fontSize={["18", "18", "30", "30"]}
          >
            Blog Posts
          </Text>
          <Link href="/posts">
            <Text
              cursor="pointer"
              color="blueBrand.100"
              fontSize="md"
              fontWeight="400"
            >
              + View All
            </Text>
          </Link>
        </Box>

        <Box>
          <CarouselBlog />
        </Box>
      </Box>

      <Box marginX={["5", "5", "5", "20"]} marginY="10">
        <Box display={["none", "none", "block", "block"]}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              color={["mediumGray.50", "#000000"]}
              fontWeight="700"
              fontSize={["18", "18", "30", "30"]}
            >
              Blog Posts
            </Text>

            <Link href="/posts">
              <Text
                cursor="pointer"
                color="blueBrand.100"
                fontSize="md"
                fontWeight="400"
              >
                + View All
              </Text>
            </Link>
          </Box>

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
              <Box display="flex" flexDirection="column">
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
                    Blog Post publication 2
                  </Text>
                  <Text fontWeight="400" fontSize="14px" color="mediumGray.50">
                    Author
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box display="flex" flexDirection="column">
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
                    Blog Post publication 3
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

      <Box>
        <Box
          background="url('img/footer.svg')"
          backgroundSize="cover"
          height="250px"
          backgroundPosition={["75% 10%", "46% 0%", "46% 0%", "0% 0%"]}
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
              SUBSCRIBE
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
            <Box
              height="65px"
              width={["55px", "55px", "105px", "85px"]}
              marginRight={["none", "none", "45px"]}
              marginTop={["none", "none", "14px"]}
            >
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
              <Box
                display="flex"
                flexDirection={["column", "column", "row"]}
                position="relative"
              >
                <Input
                  placeholder="Enter your email here"
                  backgroundColor="#FFFFFF"
                  marginTop="6"
                  paddingY="6"
                  color="gray.700"
                />
                <Box
                  display={["flex", "flex", "block"]}
                  position={["block", "block", "absolute"]}
                  zIndex="1"
                  right={[null, null, "5px"]}
                  top={[null, null, "13px"]}
                  justifyContent="flex-end"
                >
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
                    <Text fontSize={["15px", "15px", "16px"]}>SUBSCRIBE</Text>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        marginX={["5", "5", "16", "16"]}
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
        paddingTop="14"
        paddingBottom={["8", "8", "8", "60px"]}
      >
        <Box maxWidth={["97%", "97%", "100%", "280px"]}>
          <img width="140px" src="img/daitoolblack.svg" alt="" />
          <Text
            marginTop={["4", "4", "4", "8"]}
            fontWeight="400"
            fontSize="14px"
            color="#232323"
          >
            Daitool is the global reference site for high-quality, Japanese
            brand, industrial tools and supplies. We empower clients to build
            better, anywhere in the world.
          </Text>
          <Box
            maxWidth={["none", "none", "none", "300px"]}
            marginTop={["9", "9", "8", "6"]}
            display="flex"
            justifyContent="space-between"
          >
            <Text cursor="pointer">
              <img width="50px" src="/img/youtube.svg" alt="" />
            </Text>
            <Text cursor="pointer">
              <img width="50px" src="/img/linkedin.svg" alt="" />
            </Text>
            <Text cursor="pointer">
              <img width="50px" src="/img/twitter.svg" alt="" />
            </Text>
            <Text cursor="pointer">
              <img width="50px" src="/img/facebook.svg" alt="" />
            </Text>
            <Text cursor="pointer">
              <img width="50px" src="/img/instagram.svg" alt="" />
            </Text>
          </Box>
        </Box>

        <Box
          display={["block", "block", "block", "none"]}
          display="flex"
          justifyContent="space-between"
          paddingTop={["8", "8", "8", "0"]}
          marginTop="4"
        >
          <Box marginRight="36px">
            <Text
              fontWeight="700"
              marginBottom={["4", "4", "8"]}
              fontSize="16px"
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
              fontSize="16px"
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

          <Box display={["none", "none", "block", "none"]}>
            <Box>
              <Text
                fontWeight="700"
                marginBottom={["4", "4", "8"]}
                fontSize="16px"
              >
                HAVE ANY QUIESTIONS?{" "}
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
            <Box display={["none", "none", "block", "none"]}>
              <ButtonGroup
                variant="outline"
                spacing="6"
                paddingTop={["6", "6", "4"]}
              >
                <Button
                  paddingX={["30px", "30px", "10px"]}
                  paddingY={["10px", "10px", "none"]}
                  colorScheme="cyan"
                >
                  <Text fontSize={["14px", "14px", "14px"]}>CONTACT</Text>
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>

        <Box maxWidth={["180px", "240px"]}>
          <Text
            display={["none", "none", "none", "block"]}
            fontWeight="700"
            marginBottom="8"
            marginTop="4"
            fontSize="16px"
          >
            CONTACT
          </Text>
          <Text
            display={["none", "none", "none", "block"]}
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
            <Box display={["block", "block", "none", "block"]}>
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
            <Box display={["block", "block", "none", "block"]}>
              <ButtonGroup
                variant="outline"
                spacing="6"
                paddingTop={["6", "6", "4"]}
              >
                <Button
                  paddingX={["30px", "30px", "10px"]}
                  paddingY={["10px", "10px", "none"]}
                  colorScheme="cyan"
                >
                  <Text fontSize={["14px", "14px", "14px"]}>CONTACT</Text>
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>

      <footer>
        <Box
          display={["none", "none", "none", "block"]}
          borderTop="1px solid"
          borderColor="gray.200"
        ></Box>
        <Box marginX={["5", "5", "16", "20"]}>
          <Box
            display="flex"
            flexDirection={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
            justifyContent={["none", "none", "none", "space-between"]}
            paddingY="4"
          >
            <Box display="flex" alignItems="center">
              <Text paddingTop={["4", "4", "4", 0]}>
                Daitool - © 2021 All Rights Reserved
              </Text>
            </Box>
            <Box
              display={["block", "block", "block", "none"]}
              borderTop="1px solid"
              borderColor="gray.200"
            ></Box>

            <Box display="flex" alignContent="center">
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
                paddingBottom={["4", "4", "4", "0"]}
              >
                <Text color="blueBrand.200" paddingLeft={["0", "0", "0", "4"]}>
                  VISA
                </Text>
                <Box paddingX="4">
                  <Text as="span" color="orangeBrand.200">
                    MASTER
                  </Text>
                  <Text as="span" color="orangeBrand.50">
                    CARD
                  </Text>
                </Box>
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
