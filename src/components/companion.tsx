"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

const colorMap: Record<string, string> = {
  ".": "transparent",
  "b": "#9CA3AF", 
  "d": "#4B5563", 
  "c": "#F9FAFB", 
  "k": "#111827", 
  "w": "#FFFFFF", 
  "r": "#DC2626", 
};

const IDLE_FRAME_1 = [
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbkbbkdb....",
  "....dbbbbbdb....",
  "....dbcccccb....",
  ".....bckcb......",
  "......brr.......",
  ".....bbbbbb.....",
  "....bbbbbbbb....",
  "...bbbbbbbbbb...",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb....bb....",
  "....dd....dd...."
];

const IDLE_FRAME_2 = [
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbbbbbdb....",
  "....dbbbbbdb....",
  "....dbcccccb....",
  ".....bckcb......",
  "......brr.......",
  ".....bbbbbb.....",
  "....bbbbbbbb....",
  "...bbbbbbbbbb...",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb....bb....",
  "....dd....dd...."
];

const HAPPY_FRAME_1 = [
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbwbbwdb....",
  "....dbbbbbdb....",
  "....dbccrccb....",
  ".....bcrrcb.....",
  "......brr.......",
  ".....bbbbbb..d..",
  "....bbbbbbbb.d..",
  "...bbbbbbbbbbd..",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb....bb....",
  "....dd....dd...."
];

const HAPPY_FRAME_2 = [
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbwbbwdb....",
  "....dbbbbbdb....",
  "....dbccrccb....",
  ".....bcrrcb.....",
  "......brr.......",
  "..d..bbbbbb.....",
  "..d.bbbbbbbb....",
  "..dbbbbbbbbb....",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb....bb....",
  "....dd....dd...."
];

const EAT_FRAME_1 = [
  "................",
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbkbbkdb....",
  "....dbcccccb....",
  ".....bbkbbb.....",
  ".....bbbbbb.....",
  "....bbbbbbbb....",
  "...bbbbbbbbbb...",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb....bb....",
  "....dd.rr.dd....",
  "......rrrr......"
];

const EAT_FRAME_2 = [
  "................",
  "................",
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbkbbkdb....",
  "....dbcccccb....",
  ".....bbkbbb.....",
  ".....bbbbbb.....",
  "....bbbbbbbb....",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  "....bb.rr.bb....",
  "....ddrrrrdd...."
];

const SLEEP_FRAME_1 = [
  "................",
  "................",
  "................",
  "................",
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbbbbbdb....",
  "....dbcccccb....",
  "....dbbbbbbb....",
  "....bbbbbbbbb...",
  "...bbbbbbbbbbb..",
  "..bbbbbbbbbbbb..",
  "..bbbbbbbbbbbb..",
  "..dddddddddddd.."
];

const SLEEP_FRAME_2 = [
  "................",
  "................",
  "................",
  "................",
  "................",
  "......dddd......",
  "....ddbbbbdd....",
  "....dbbbbbdb....",
  "....dbcccccb....",
  "....dbbbbbbb....",
  "....bbbbbbbbb...",
  "...bbbbbbbbbbb..",
  "..bbbbbbbbbbbb..",
  "..bbbbbbbbbbbb..",
  "..dddddddddddd..",
  "................"
];

interface Particle {
  id: number;
  text: string;
  x: number;
  y: number;
}

export function Companion() {
  const [energy, setEnergy] = useState<number>(80);
  const [state, setState] = useState<"idle" | "happy" | "eating" | "sleeping">("idle");
  const [frameIndex, setFrameIndex] = useState<number>(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const drainInterval = setInterval(() => {
      setEnergy((prev) => {
        const next = Math.max(0, prev - 5);
        if (next < 20) {
          setState("sleeping");
        }
        return next;
      });
    }, 8000);

    return () => clearInterval(drainInterval);
  }, []);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrameIndex((prev) => (prev === 0 ? 1 : 0));
    }, 400);

    return () => clearInterval(frameInterval);
  }, []);

  useEffect(() => {
    if (state !== "sleeping") return;

    const zzzInterval = setInterval(() => {
      const id = Date.now() + Math.random();
      const randomX = Math.random() * 30 - 15;
      setParticles((prev) => [...prev, { id, text: "💤", x: randomX, y: 0 }]);
      
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 2000);
    }, 1500);

    return () => clearInterval(zzzInterval);
  }, [state]);

  const emitParticles = (text: string, count: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const id = Date.now() + Math.random() + i;
      const x = Math.random() * 60 - 30;
      newParticles.push({ id, text, x, y: 0 });
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 2000);
    }
    setParticles((prev) => [...prev, ...newParticles]);
  };

  const handlePet = () => {
    if (state === "sleeping" && energy < 20) {
      emitParticles("💤", 1);
      return;
    }
    setState("happy");
    setEnergy((prev) => Math.min(100, prev + 10));
    emitParticles("✨", 3);
    setTimeout(() => {
      setState("idle");
    }, 3000);
  };

  const handleFeed = () => {
    if (energy >= 100) {
      emitParticles("❌", 1);
      return;
    }
    setState("eating");
    setEnergy((prev) => Math.min(100, prev + 25));
    emitParticles("🍖", 2);
    setTimeout(() => {
      setState("idle");
    }, 2500);
  };

  const getActiveFrame = () => {
    switch (state) {
      case "happy":
        return frameIndex === 0 ? HAPPY_FRAME_1 : HAPPY_FRAME_2;
      case "eating":
        return frameIndex === 0 ? EAT_FRAME_1 : EAT_FRAME_2;
      case "sleeping":
        return frameIndex === 0 ? SLEEP_FRAME_1 : SLEEP_FRAME_2;
      case "idle":
      default:
        return frameIndex === 0 ? IDLE_FRAME_1 : IDLE_FRAME_2;
    }
  };

  const activeFrame = getActiveFrame();

  return (
    <div className="terminal-window w-full max-w-[320px] mx-auto animate-scale-in">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot bg-[#ef4444]" />
          <div className="terminal-dot bg-[#eab308]" />
          <div className="terminal-dot bg-[#22c55e]" />
        </div>
        <div className="terminal-title">companion.exe</div>
        <div className="w-10" />
      </div>

      <div className="p-5 flex flex-col items-center gap-4 bg-[var(--muted)]">
        {/* Render Canvas */}
        <div className="relative w-44 h-44 flex items-center justify-center bg-[var(--muted)] border border-[var(--border)] rounded-lg overflow-hidden">
          {/* Subtle floor */}
          <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-[var(--border)] rounded-full" />
          
          {/* Particle Emitter */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute pointer-events-none select-none text-base"
              style={{
                bottom: "70px",
                transform: `translateX(${p.x}px)`,
                animation: "float-up 2s ease-out forwards",
                "--float-x": `${p.x * 1.5}px`,
              } as React.CSSProperties}
            >
              {p.text}
            </div>
          ))}

          {/* SVG Pixel Art rendering */}
          <svg viewBox="0 0 16 16" className="w-32 h-32 select-none" style={{ shapeRendering: "crispEdges" }}>
            {activeFrame.map((row, y) =>
              row.split("").map((char, x) => {
                const color = colorMap[char];
                if (!color || color === "transparent") return null;
                return (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width={1.05}
                    height={1.05}
                    fill={color}
                  />
                );
              })
            )}
          </svg>
        </div>

        {/* Stats Panel */}
        <div className="w-full font-mono text-xs space-y-2" style={{ color: 'var(--muted-foreground)' }}>
          <div className="flex justify-between">
            <span>COMPAÑERO:</span>
            <span className="text-white font-semibold">Milo</span>
          </div>
          <div className="flex justify-between">
            <span>ESTADO:</span>
            <span className="text-[var(--accent)] font-semibold uppercase">
              {state === "sleeping" ? "Durmiendo" : state === "happy" ? "Feliz" : state === "eating" ? "Comiendo" : "Esperando"}
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span>ENERGÍA:</span>
              <span>{energy}%</span>
            </div>
            <div className="h-2 w-full bg-[var(--muted)] border border-[var(--border)] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-500"
                style={{ width: `${energy}%` }}
              />
            </div>
          </div>
        </div>

        {/* Interactions */}
        <div className="w-full grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={handlePet}
            className="flex items-center justify-center gap-1.5 border border-[var(--border)] bg-[var(--muted)] hover:border-[var(--accent)] hover:text-white transition-all text-xs font-mono py-1.5 rounded-lg"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Acariciar
          </button>
          <button
            onClick={handleFeed}
            className="flex items-center justify-center gap-1.5 border border-[var(--border)] bg-[var(--muted)] hover:border-[var(--accent)] hover:text-white transition-all text-xs font-mono py-1.5 rounded-lg"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Heart className="h-3.5 w-3.5" /> Alimentar
          </button>
        </div>
      </div>
    </div>
  );
}
