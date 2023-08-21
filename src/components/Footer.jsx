import React, { useEffect, useState } from "react";
const RightMidPart = () => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag((a) => !a);
    }, 3000);
  });

  return (
    <div className={` ${flag ? "grey" : "blue"}`}>
      <div>Type Text</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, illum.
      </div>
      <div>
        <button
          onClick={() => {
            setFlag((a) => !a);
          }}
          style={{ borderRadius: "100" }}
        >
          click here
        </button>
      </div>
    </div>
  );
};

export default RightMidPart;
