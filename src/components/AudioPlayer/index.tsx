function AudioPlayer({ soundEffect }: Readonly<{ soundEffect: string }>) {
  return (
    <audio autoPlay>
      <source src={`/audios/${soundEffect}`} type="audio/mp3" />
    </audio>
  );
}

export default AudioPlayer;
