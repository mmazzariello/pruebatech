import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpoint,
} from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Carousel = () => {
  const currentBreakpoint = useBreakpoint();

  const visibleSlides =
    currentBreakpoint === "base"
      ? 2
      : currentBreakpoint === "sm"
      ? 3
      : currentBreakpoint === "md"
      ? 3
      : 4;

  return (
    <Box backgroundColor={["none", "none", "#F9F9FB"]}>
      <CarouselProvider
        isIntrinsicHeight
        totalSlides={14}
        visibleSlides={visibleSlides}
      >
        <Box
          display="flex"
          marginLeft={["5", "5", "20"]}
          paddingY={["none", "none", "8"]}
        >
          <Box
            display={["none", "none", "block"]}
            paddingY="20px"
            paddingX="10"
            marginRight="10"
          >
            <Heading minWidth="100px" fontSize="md">
              This Weeks Top 10 Selected Products
            </Heading>
            <Box display="flex">
              <ButtonBack>
                <IconButton
                  as="div"
                  isRound
                  variant="ghost"
                  icon={<BiChevronLeftCircle size="20px" />}
                />
              </ButtonBack>
              <ButtonNext>
                <IconButton
                  as="div"
                  isRound
                  variant="ghost"
                  icon={<BiChevronRightCircle size="20px" />}
                  color="orangeBrand.100"
                />
              </ButtonNext>
            </Box>
          </Box>

          <Slider>
            {[...Array(14).keys()].map((index) => {
              return (
                <Slide key={index} index={index}>
                  <Box paddingX={["1", "1", "4"]}>
                    <ProductCard title={`Product ${index}`} />
                  </Box>
                </Slide>
              );
            })}
          </Slider>
        </Box>
      </CarouselProvider>
    </Box>
  );
};

const ProductCard = ({
  title = "Some Title",
  url = "/img/product.svg",
  description = "Brief description",
  price = "$ 300",
  originalPrice = "$ 400",
}) => {
  return (
    <Box
      boxShadow="lg"
      borderRadius="lg"
      padding={["2", "2", "4"]}
      width="100%"
      backgroundColor="#FFFFFF"
    >
      <Image src={url} />
      <Box marginTop="2" />
      <Heading fontSize="md">{title}</Heading>
      <Text fontSize="sm" color="gray.400" fontWeight="400">
        {description}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        marginTop={["1", "1", "4"]}
        flexWrap="wrap"
      >
        <Text color="orangeBrand.100" fontWeight="bold" fontSize="sm">
          {price}
        </Text>
        <Box marginRight={["20", "20", "2"]} />
        <Text
          color="gray.400"
          fontSize="sm"
          fontWeight="400"
          textDecoration="line-through"
        >
          {originalPrice}
        </Text>
        <Box flexGrow={1} />
        <Box display={["none", "none", "none", "block"]}>
          <Box display="flex" fontSize="xs">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
