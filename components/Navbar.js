import { Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="p-2 background-nav">
      <ul className="flex flex-row text-white list-none text-xs px-12">
        <Text cursor="pointer">
          <li className="pr-6">SAFETY</li>
        </Text>
        <Text cursor="pointer">
          <li className="pr-6">JANITORIAL</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">TOOLS</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">WOODWORKING</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">GARDENING</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">OFFICE SUPPLIES</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">BLOG</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">BRANDS</li>
        </Text>

        <Text cursor="pointer">
          <li className="pr-6">ABOUT US</li>
        </Text>
      </ul>
    </div>
  );
};

export default Navbar;
