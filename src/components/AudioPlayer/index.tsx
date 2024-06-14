type TAudioPlayer = Readonly<{
  soundEffect: string;
  muted?: boolean;
  loop?: boolean;
}>;

function AudioPlayer({
  soundEffect,
  muted = false,
  loop = false,
}: TAudioPlayer) {
  return (
    <audio autoPlay muted={muted} loop={loop}>
      <source src={`/audios/${soundEffect}`} type="audio/mp3" />
    </audio>
  );
}

export default AudioPlayer;
