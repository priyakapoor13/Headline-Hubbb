import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from  "./NewsBoard";
import Footer from "./Footer";



const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar setCategory={setCategory} />
      <div className="flex-grow-1">
        <NewsBoard category={category} />
      </div>
      <Footer />
    </div>
  );
};



export default App