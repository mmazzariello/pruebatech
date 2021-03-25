import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Hamburguer = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        size="xl"
        variant=""
        color="#FFFFFF"
        paddingY="6"
      />
      <MenuList>
        <Box
          display="flex"
          justifyContent="flex-start"
          paddingTop="6"
          marginX="5"
        >
          <Box paddingRight="5">
            <CloseIcon />
          </Box>
          <img width="100px" src="img/daitoolblack.svg" alt="" />
        </Box>
        <Box marginTop="8" marginX="10">
          <MenuItem fontWeight="bold" fontSize="18px">
            Products
          </MenuItem>
          <MenuItem fontWeight="500">Safety</MenuItem>
          <MenuItem fontWeight="500">Janitorial</MenuItem>
          <MenuItem fontWeight="500">Woodworking</MenuItem>
          <MenuItem fontWeight="500">Gardening</MenuItem>
          <MenuItem fontWeight="500">Office Supplies</MenuItem>
        </Box>
        <Box marginX="10" paddingY="8">
          <MenuItem fontWeight="bold" fontSize="18px">
            About Us
          </MenuItem>
          <MenuItem fontWeight="500">Blog</MenuItem>
          <MenuItem fontWeight="500">Brands</MenuItem>
        </Box>
        <Box borderTop="1px solid" borderColor="gray.200" marginX="5"></Box>
        <Box marginX="10" paddingBottom="40">
          <MenuItem fontWeight="bold" paddingTop="8" fontSize="18px">
            Need Help?
          </MenuItem>
          <Box marginLeft="4" display="flex">
            <img
              src="/img/topNav/phone.svg
          "
              alt=""
            />
            <MenuItem fontWeight="500" color="orangeBrand.100">
              + 123 456 789
            </MenuItem>
          </Box>
          <Box marginLeft="4" display="flex">
            <img
              src="/img/topNav/mail.svg
          "
              alt=""
            />
            <MenuItem fontWeight="500" color="orangeBrand.100" paddingLeft="4">
              info@daitool.com
            </MenuItem>
          </Box>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default Hamburguer;
