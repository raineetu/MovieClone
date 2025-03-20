import React from "react";

const Searchbar = ({ searchItem, setSearchItem }) => {
  return (
    <>
      {/* Search bar */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search through 300+ movies online"
          className="w-full p-3 bg-white/10 rounded-full border border-white/10 placeholder-gray-300 text-white focus:outline-none"
        />
      </div>
    </>
  );
};

export default Searchbar;
