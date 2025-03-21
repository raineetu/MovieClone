import React from "react";
import { Search } from "lucide-react";

const Searchbar = ({ searchItem, setSearchItem }) => {
  return (
    <>
      {/* Search bar with icon */}
      <div className="mt-6 w-full max-w-md relative">
        <input
          type="text"
          placeholder="Search through 300+ movies online"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full text-gray-800 p-3 pl-10 bg-white/10 rounded-full border border-white/10 placeholder-gray-800 focus:outline-none"
        />

        {/* Search Icon */}
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"
          size={20}
        />
      </div>
    </>
  );
};

export default Searchbar;
