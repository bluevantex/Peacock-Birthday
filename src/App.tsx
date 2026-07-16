import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import Scene3D from './components/Scene3D';
import AudioController from './components/AudioController';
import CinematicIntro from './components/CinematicIntro';
import TerminalLoader from './components/TerminalLoader';
import HeroSection from './components/HeroSection';
import PictureSection from './components/PictureSection';
import SectionFather from './components/SectionFather';
import SectionDevMode from './components/SectionDevMode';
import SectionHospital from './components/SectionHospital';
import SectionTimeline from './components/SectionTimeline';
import SectionStats from './components/SectionStats';
import SectionPromise from './components/SectionPromise';
import SectionDua from './components/SectionDua';
import SectionFinal from './components/SectionFinal';

export default function App() {
  const [phase, setPhase] = useState<'intro' | 'terminal' | 'hero' | 'story'>('intro');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useLenis();

  // Mouse Parallax Glow Core Tracking Engine
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Immersive Depth Cursor Rings */}
      <div className="hidden md:block custom-cursor" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className="hidden md:block custom-cursor-glow" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      {/* R3F WebGL Stars and Core Orb Layer */}
      <Scene3D showOrb={phase === 'story' || phase === 'hero'} />

      {/* Embedded High-Fidelity Audio Core Engine */}
      <AudioController isPlaying={phase === 'story'} />

      {/* Orchestrated Stage Gateway Transitions */}
      {phase === 'intro' && (
        <CinematicIntro onComplete={() => setPhase('terminal')} />
      )}

      {phase === 'terminal' && (
        <TerminalLoader onComplete={() => setPhase('hero')} />
      )}

      {phase === 'hero' && (
        <HeroSection onBegin={() => setPhase('story')} />
      )}

      {phase === 'story' && (
        <div className="relative w-full">
          <PictureSection />
          <SectionFather />
          <SectionDevMode />
          <SectionHospital />
          <SectionTimeline />
          <SectionStats />
          <SectionPromise />
          <SectionDua />
          <SectionFinal />
        </div>
      )}
    </>
  );
}