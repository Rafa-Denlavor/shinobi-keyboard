import { useEffect, useRef } from "react";

type TAudioPlayer = Readonly<{
  sound: string;
  muted?: boolean;
  loop?: boolean;
  volume?: number;
}>;

function AudioPlayer({ sound, muted = false, loop = false, volume = 0.7 }: TAudioPlayer) {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume ?? 0.7; 
    }
}, [volume]);

  return (
    <audio ref={audioRef} autoPlay muted={muted} loop={loop}>
      <source src={`/audios/mp3/${sound}.mp3`} type="audio/mpeg" />
      <source src={`/audios/ogg/${sound}.ogg`} type="audio/ogg" />
      <source src={`/audios/wav/${sound}.wav`} type="audio/wav" />
    </audio>
  );
}

export default AudioPlayer;
