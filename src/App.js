import React from "react";
import Header from "./components/Header";
import LeftMidPart from "./components/LeftMidPart";
import Footer from "./components/Footer";
import RightMidPart from "./components/RightMidPart";
function App() {
  return (
   <div className="main-page">
    <Header />
   
    <Footer />
    <div style="width: 50%; float:left">
      <LeftMidPart />
      </div>
    <div style="width: 50%; float:right">
      <RightMidPart />
    </div>
   </div>
  );
}

export default App;
