import React, { useState, useContext } from "react";
import useSpeaker from "@/Hooks/useSpeaker";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SpeakerContext from "@/context/speakerContext";

const Speakers = () => {
  const speakers = useContext(SpeakerContext);

  return (
    <div className="bg-red-300 h-screen">
      <Header />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {speakers.map((item) => {
          return <Card key={item.id} stage={item} />;
        })}
      </div>
    </div>
  );
};

export default Speakers;
