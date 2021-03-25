import { Box, Heading, Image, Text, useBreakpoint } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const CarouselBlog = () => {
  const currentBreakpoint = useBreakpoint();

  const visibleSlides =
    currentBreakpoint === "base"
      ? 1
      : currentBreakpoint === "sm"
      ? 2
      : currentBreakpoint === "md"
      ? 2
      : 3;

  return (
    <Box>
      <CarouselProvider
        isIntrinsicHeight
        totalSlides={9}
        visibleSlides={visibleSlides}
      >
        <Box display="flex">
          <Slider>
            {[...Array(9).keys()].map((index) => {
              return (
                <Slide key={index} index={index}>
                  <Box paddingX={["1", "1", "5"]}>
                    <BlogCard title={`Blog Post publication ${index}`} />
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

const BlogCard = ({
  titleBlog = "Some Title",
  urlBlog = "img/blog.svg",
  author = "Author",
}) => {
  return (
    <Box
      boxShadow="lg"
      borderRadius="lg"
      padding={["1", "2", "4"]}
      width="95%"
      marginX={["5", "5", "5", "20"]}
      marginTop="5"
    >
      <Image src={urlBlog} />
      <Box marginTop="2" />
      <Heading fontSize="md">{titleBlog}</Heading>
      <Text fontSize="sm" color="gray.400" fontWeight="400">
        {author}
      </Text>
      <Box marginRight={["20", "20", "2"]} />
      <Box display={["none", "none", "block", "block"]}>
        <Box flexGrow={1} />
      </Box>
    </Box>
  );
};
