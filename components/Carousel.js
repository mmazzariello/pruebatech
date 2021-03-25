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
    <Box>
      <CarouselProvider
        isIntrinsicHeight
        totalSlides={14}
        visibleSlides={visibleSlides}
      >
        <Box display="flex">
          <Box
            display={["none", "none", "block"]}
            paddingY="20px"
            paddingX="10"
            marginRight="10"
          >
            <Heading fontSize="md">This week top 10 selected products</Heading>
            <Box display="flex">
              <ButtonBack>
                <IconButton
                  isRound
                  variant="ghost"
                  icon={<BiChevronLeftCircle size="20px" />}
                />
              </ButtonBack>
              <ButtonNext>
                <IconButton
                  isRound
                  variant="ghost"
                  icon={<BiChevronRightCircle size="20px" />}
                />
              </ButtonNext>
            </Box>
          </Box>
          <Slider>
            {[...Array(14).keys()].map((index) => {
              return (
                <Slide key={index} index={index}>
                  <Box paddingX={["1", "1", "5"]}>
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
    >
      <Image src={url} />
      <Box marginTop="2" />
      <Heading fontSize="md">{title}</Heading>
      <Text fontSize="sm" color="gray.400" fontWeight="400">
        {description}
      </Text>
      <Box display="flex" marginTop={["1", "1", "4"]} flexWrap="wrap">
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
        <Box display={["none", "none", "block", "block"]}>
          <Box flexGrow={1} />
          <Box className="border" display="flex" fontSize="xs">
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
