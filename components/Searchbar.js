const Searchbar = () => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="bg-white h-8 px-56 pr-16 rounded-3xl text-sm focus:outline-none"
        type="search"
        name="search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
      ></button>
    </div>
  );
};

export default Searchbar;
