import React from "react";
import Image from "next/image";

const Card = ({ stage }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-slate-200 h-[150px] p-4">
        <div className="rounded-[50%] w-[100px] h-[100px] bg-orange-300 flex justify-center items-center">
          <Image src={`/images/${stage.imageUrl}.png`} alt={stage.imageUrl} width={50} height={50} className="object-contain"/>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{`${stage.firstName} ${stage.lastName}`}</h2>
        <p className="text-gray-700">{stage.bio}</p>
      </div>
    </div>
  );
};

export default Card;
