import React from "react";
import Image from "next/image";

const Card = ({ stage }) => {

  if(stage){
    console.log("Content of stage are: ", stage)
  }
  else{
    console.log("Failed to fetch")
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <Image className="h-48 w-full object-cover" src={`/images/${stage.imageUrl}.png`} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{`${stage.firstName} ${stage.lastName}`}</h2>
        <p className="text-gray-700">{stage.bio}</p>
      </div>
    </div>
  );
};

export default Card;
