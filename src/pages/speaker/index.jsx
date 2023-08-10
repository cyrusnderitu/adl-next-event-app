import React from "react";
import Image from "next/image";

const Speaker = ({speaker}) => {

    console.log("Speaker prop coming to speaker is: ", speaker)
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <Image className="h-48 w-full object-cover" src={`/images/${speaker.imageUrl}.png`} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{`${speaker.firstName} ${speaker.lastName}`}</h2>
        <p className="text-gray-700">{speaker.bio}</p>
      </div>
    </div>
  );
};

export default Speaker;
