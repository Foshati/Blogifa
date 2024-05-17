"use client";

import { useState, useRef, useEffect } from "react";
import { Disc3 } from "lucide-react";

const MusicIco = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/audio/andyfa.mp3");
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? <Disc3 className="animate-spin" /> : <Disc3 />}
      </button>
    </div>
  );
};

export default MusicIco;
