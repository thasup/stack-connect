import React, { useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";

interface AudioPlayerProps {
  audioUrl: string;
}

export default function AudioPlayer({ audioUrl, ...props }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Listen for the "ended" event on the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioUrl]);

  // Optionally, auto-play when the audioUrl changes
  useEffect(() => {
    // Remove auto-play if not desired
    handlePlay();
  }, [audioUrl]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} style={{ display: "none", ...props }} />
      {isPlaying ? (
        <PauseIcon style={{ cursor: "pointer" }} onClick={handlePause} />
      ) : (
        <VolumeUpIcon style={{ cursor: "pointer" }} onClick={handlePlay} />
      )}
    </div>
  );
}
