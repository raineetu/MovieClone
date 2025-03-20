import React, { useState } from "react";
import Searchbar from "./Searchbar";

const HeroSection = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="hero-section text-white">
      {/* logo section */}
      <div className="mb-6">
        <img
          src="https://i.pinimg.com/736x/0f/41/09/0f4109ebabc4174df32d708fb77175fa.jpg"
          alt="Movie App logo"
          className="w-60 h-60 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-5xl font-bold">
        Find <span className="movie-title">Movies</span> You'll Love <br />
        Without the Hassle
      </h1>

      <Searchbar searchItem={searchItem} setSearchItem={setSearchItem} />
    </div>
  );
};

export default HeroSection;
