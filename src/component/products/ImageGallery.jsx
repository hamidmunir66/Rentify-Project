import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [active, setActive] = useState(images[0]);

  return (
    <>
      <div className="space-y-4">
        <div className="rounded-2xl overflow-hidden border">
          <img src={active} className="w-full h-[420px] object-cover" />
        </div>

        <div className="flex gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActive(img)}
              className={`h-20 w-32 object-cover rounded-xl cursor-pointer border ${
                active === img ? "border-blue-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
