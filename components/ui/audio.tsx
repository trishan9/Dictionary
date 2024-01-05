"use client";

import { useRef, useState } from "react";
import { PauseCircle, PlayCircle } from "lucide-react";

const AudioControl = ({ audioSrc }: { audioSrc: string }) => {
  const audioRef = useRef<any>();
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const handleAudioControl = () => {
    if (isAudioPlaying) {
      setIsAudioPlaying(false);
      audioRef.current.pause();
    } else {
      setIsAudioPlaying(true);
      audioRef.current.play();
    }
  };

  return (
    <button
      onClick={handleAudioControl}
      className="rounded-full bg-black text-white p-2 flex justify-center items-center"
    >
      {isAudioPlaying ? (
        <PauseCircle className="w-6 h-6" />
      ) : (
        <PlayCircle className="w-6 h-6" />
      )}

      <audio
        src={audioSrc}
        onEnded={() => setIsAudioPlaying(false)}
        controls
        ref={audioRef}
        className="hidden"
      />
    </button>
  );
};

export default AudioControl;
