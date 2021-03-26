import {
  IconButton,
  Box,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  return (
    <Box>
      <IconButton
        variant="ghost"
        color="white"
        colorScheme="whiteAlpha"
        isRound
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton paddingTop="10" left="2" />
            <Box paddingTop="36px" paddingLeft="14" display="flex">
              <img width="100px" src="img/daitoolblack.svg" alt="" />
            </Box>

            <DrawerBody>
              <Box marginX="10" paddingY="8">
                <Text fontWeight="bold" fontSize="20px">
                  Products
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Safety
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Janitorial
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Woodworking
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Gardening
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Office Supplies
                </Text>
              </Box>
              <Box marginX="10" paddingY="8">
                <Text fontWeight="bold" fontSize="20px">
                  About Us
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Blog
                </Text>
                <Text fontWeight="600" cursor="pointer" paddingY="2">
                  Brands
                </Text>
              </Box>
              <Box
                borderTop="1px solid"
                borderColor="gray.300"
                marginX="5"
              ></Box>

              <Box marginX="10" paddingY="8">
                <Text fontWeight="bold" fontSize="20px">
                  Need Help?
                </Text>
                <Box display="flex" justifyContent="space-around" marginTop="2">
                  <img
                    src="/img/topNav/phone.svg
          "
                    alt=""
                  />
                  <Text
                    fontWeight="600"
                    paddingY="2"
                    cursor="pointer"
                    color="orangeBrand.100"
                  >
                    + 123 456 789
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-around">
                  <img
                    src="/img/topNav/mail.svg
          "
                    alt=""
                  />
                  <Text
                    fontWeight="600"
                    paddingY="2"
                    cursor="pointer"
                    color="orangeBrand.100"
                  >
                    info@daitool.com
                  </Text>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
