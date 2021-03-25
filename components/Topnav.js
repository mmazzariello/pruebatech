import Searchbar from "./Searchbar";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Hamburguer from "./Hamburguer";

const Topnav = () => {
  return (
    <Box backgroundColor="orangeBrand.100">
      <Box
        marginX={["5", "5", "5", "10"]}
        paddingTop={["4", "4", "4"]}
        paddingBottom={["2"]}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display={["block", null, "none"]}>
            <Hamburguer />
          </Box>
          <Box marginBottom="1" display="flex">
            <img
              width={["100px", "100px", "350px"]}
              src="img/daitool.svg"
              alt=""
              margin-left="5px"
            />
          </Box>
          <Box
            display={["none", "none", "block", "block"]}
            flexGrow={1}
            maxWidth="900px"
            marginX="20"
          >
            <Searchbar />
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
              <img src="/img/topNav/cartGlass.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={["block", null, "none"]} marginX="5" paddingBottom="3">
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Topnav;
