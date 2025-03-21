import React, { Suspense, useState } from "react";

const HeroSection = React.lazy(() => import("./components/HeroSection"));
const MovieList = React.lazy(() => import("./components/MovieList"));

function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <HeroSection searchItem={searchItem} setSearchItem={setSearchItem} />
        <MovieList searchItem={searchItem} />
      </Suspense>
    </div>
  );
}

export default App;
