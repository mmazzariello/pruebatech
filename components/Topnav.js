import Searchbar from "./Searchbar";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Hamburguer from "./Hamburguer";

const Topnav = () => {
  return (
    <Box backgroundColor="orangeBrand.100">
      <Box
        className="border"
        marginX={["5", "5", "5", "10"]}
        paddingTop={["4", "4", "4"]}
        paddingBottom={["4", "4", "2"]}
      >
        <Box display="flex" className="border2" justifyContent="space-between">
          <Box>
            <Hamburguer />
          </Box>
          <Box marginBottom="1" className="border3" display="flex">
            <img
              width={["100px", "100px", "350px"]}
              src="img/daitool.svg"
              alt=""
              marginLeft="5px"
            />
          </Box>
          <Box
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
                src="/img/topNav/cartGlass.svg
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
