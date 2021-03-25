import Searchbar from "./Searchbar";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

const Topnav = () => {
  return (
    <Box backgroundColor="orangeBrand.100">
      <Box
        className="border"
        marginX={["5", "5", "5", "10"]}
        paddingY={["16", "16", "4"]}
      >
        <Box className="border4" display="flex" justifyContent="space-between">
          <Box className="border2" display="flex">
            <img
              width={["100px", "100px", "350px"]}
              src="img/daitool.svg"
              alt=""
              marginLeft="5px"
            />
          </Box>
          <Box
            className="border3"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              display="inline-flex"
              flexDirection="column"
              alignItems="center"
            >
              <img
                src="/img/topNav/cart.svg
          "
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Topnav;
