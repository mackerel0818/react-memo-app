import React from "react";

export default function BackgroundImage() {
  const backgroundStyle = {
    backgroundImage:
      "url(https://res.cloudinary.com/dnbf7czsn/image/upload/v1697093937/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_cdp7lp.png)",
    backgroundSize: "90%",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundStyle}
      className="absolute bottom-0 left-0 right-0 mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl h-[250px]"
    />
  );
}
