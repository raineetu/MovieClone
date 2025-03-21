import React from "react";
import Searchbar from "./Searchbar";

const HeroSection = ({ searchItem, setSearchItem }) => {
  return (
    <>
      {/* background image */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20250106/original/pngtree-clipart-a-compelling-movie-poster-background-picture-image_14548386.jpg')",
        }}
      >
        <div className="container">
          {/* Title */}
          <div className="flex flex-col justify-center items-center h-90 ">
            <h1>
              Find <span className="movie-title">Movies</span> You'll Love{" "}
              <br />
              Without the Hassle
            </h1>
            {/* Serach bar */}
            <Searchbar searchItem={searchItem} setSearchItem={setSearchItem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
