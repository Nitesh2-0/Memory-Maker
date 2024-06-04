import React from "react";
import MainRoute from '../src/routes/MainRoute'
import Footer from "../src/components/Footer"

const App = () => {
  return (
    <div className="bg-gray-900 w-full h-screen text-white">
      <MainRoute />
      <Footer/>
    </div>
  );
};

export default App;