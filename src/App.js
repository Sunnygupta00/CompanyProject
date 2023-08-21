import React from "react";
import Header from "./component/Header";
import LeftMidPart from "./component/LeftMidPart";
import RightMidPart from "./component/RightMidPart";
function App() {
  const topStyle = {
    backgroundColor: "#FDE3D9",
    padding: "0",
    margin: "0"
  };
  return (
    <div className="main-page" style={topStyle}>
      <Header />
      <div
        style={{
          width: "50%",
          float: "left",
          height: "100vh",
          backgroundColor: "#FDE3D9"
        }}
      >
        <LeftMidPart />
      </div>
      <div
        className="pad"
        style={{
          width: "50%",
          float: "right",
          height: "100vh",
          backgroundImage: "url('../component/dog.png')",
          textAlign: "left",
          backgroundColor: "grey"
        }}
      >
        <RightMidPart />
      </div>
    </div>
  );
}

export default App;
