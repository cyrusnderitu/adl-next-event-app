import React, { useState, useContext } from "react";
import useSpeaker from "@/Hooks/useSpeaker";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SpeakerContext from "@/context/speakerContext";

const Speakers = () => {

  const speakers = useContext(SpeakerContext);

  console.log("Speakers on speakers are: ", speakers)
  return (
    <div>
      <Header />
      <h1>This is the Speakers section</h1>
      <div className="grid grid-cols-3 gap-3">
        {speakers.map((speaker) => {
          <Card key={speaker.id} stage={speaker} />;
        })}
      </div>
    </div>
  );
};

export default Speakers;
