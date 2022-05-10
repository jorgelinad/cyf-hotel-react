import React from "react";

const Heading = () => {
  const hotelImagen = "https://image.flaticon.com/icons/svg/139/139899.svg";
  return (
    <header className="App-header">
      <img
        src={hotelImagen}
        alt="Hotel Logo"
        with={25}
        style={{
          margin: "0 15px"
        }}
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
