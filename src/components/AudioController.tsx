import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

interface AudioControllerProps {
  isPlaying: boolean;
}

export default function AudioController({ isPlaying }: AudioControllerProps) {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      // High quality emotional instrumental piano track
      src: ['https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3'],
      loop: true,
      volume: 0,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    if (isPlaying && soundRef.current) {
      soundRef.current.play();
      soundRef.current.fade(0, 0.15, 6000); // Exquisite, slow 6-second fade
    }
  }, [isPlaying]);

  return null;
}