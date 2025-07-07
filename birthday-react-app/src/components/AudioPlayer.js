import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <section className="audio-section section-reveal">
      <h2>Our Melody</h2>
      <div id="audio-player-container">
        <audio ref={audioRef} loop>
          <source src="/song.m4a" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={togglePlayPause} aria-label="Play or pause our song">
          {isPlaying ? 'Pause Our Song ⏸️' : 'Play Our Song 🎶'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume slider"
        />
        <span>Volume</span>
      </div>
    </section>
  );
};

export default AudioPlayer;