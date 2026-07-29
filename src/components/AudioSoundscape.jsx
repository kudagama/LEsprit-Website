"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSoundscape = () => {
    if (!isPlaying) {
      startSound();
      setIsPlaying(true);
    } else {
      stopSound();
      setIsPlaying(false);
    }
  };

  const startSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const bufferSize = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.153852;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        data[i] *= 0.03;
        b6 = white * 0.115926;
      }

      noiseNodeRef.current = ctx.createBufferSource();
      noiseNodeRef.current.buffer = buffer;
      noiseNodeRef.current.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(340, ctx.currentTime);

      gainNodeRef.current = ctx.createGain();
      gainNodeRef.current.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 2);

      noiseNodeRef.current.connect(filter);
      filter.connect(gainNodeRef.current);
      gainNodeRef.current.connect(ctx.destination);

      noiseNodeRef.current.start();
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const stopSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        if (noiseNodeRef.current) {
          noiseNodeRef.current.stop();
          noiseNodeRef.current.disconnect();
        }
      }, 850);
    }
  };

  return (
    <button
      onClick={toggleSoundscape}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-cinzel tracking-wider ${
        isPlaying
          ? "bg-gold-primary/20 border-gold-primary text-white shadow-gold"
          : "bg-white/10 border-gold-border text-gold-warm hover:bg-gold-primary/10"
      }`}
      aria-label="Toggle Soundscape"
    >
      {isPlaying ? <Volume2 className="w-4 h-4 text-gold-primary animate-pulse" /> : <VolumeX className="w-4 h-4" />}
      <span>{isPlaying ? "Soundscape: Active" : "Ambient Soundscape"}</span>
    </button>
  );
}
