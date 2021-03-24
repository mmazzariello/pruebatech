const Navbar = () => {
  return (
    <div
      display={["none", "none", "block", "block"]}
      className="p-2 background-nav"
    >
      <ul className="flex flex-row text-white list-none text-xs px-12">
        <li className="pr-6">SAFETY</li>
        <li className="pr-6">JANITORIAL</li>
        <li className="pr-6">TOOLS</li>
        <li className="pr-6">WOODWORKING</li>
        <li className="pr-6">GARDENING</li>
        <li className="pr-6">OFFICE SUPPLIES</li>
        <li className="pr-6">BLOG</li>
        <li className="pr-6">BRANDS</li>
        <li className="pr-6">ABOUT US</li>
      </ul>
    </div>
  );
};

export default Navbar;
