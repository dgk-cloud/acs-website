"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.5,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [10 / 255, 16 / 255, 32 / 255],
  markerColor: [40 / 200, 116 / 255, 255 / 255],
  glowColor: [31 / 255, 177 / 255, 255 / 255],
  markers: [
    { location: [37.4316, -78.6569], size: 0.08 }, // us-v (united states, virginia)
    { location: [40.3888, -82.7649], size: 0.08 }, // us-oh (united states, ohio)
    { location: [36.7783, -119.4179], size: 0.08 }, // us-ca (united states, california)
    { location: [43.8041, -120.5542], size: 0.08 }, // us-or (united states, oregon)
    { location: [46.8139, -71.2080], size: 0.08 }, // ca-q (canada, quebec)
    { location: [51.5074, -0.1278], size: 0.08 }, // uk-l (uk, greater london)
    { location: [50.1109, 8.6821], size: 0.08 }, // de-he (germany, hesse)
    { location: [35.6762, 139.6503], size: 0.08 }, // jp-13 (japan, tokyo prefecture)
    { location: [37.5665, 126.9780], size: 0.08 }, // kr-11 (south korea, seoul special city)
    { location: [-33.8688, 151.2093], size: 0.08 }, // au-nsw (australia, new south wales)
  ],
};

function BigGlobe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let currentWidth = 0;
    const onResize = () => {
      if (canvasRef.current) {
        currentWidth = canvasRef.current.offsetWidth;
      }
      if (!currentWidth && typeof window !== "undefined") {
        currentWidth = Math.min(window.innerWidth, 600); // sensible mobile fallback
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    console.log("Creating globe with canvas:", canvasRef.current);
    console.log("Canvas width:", currentWidth);

    try {
      const globe = createGlobe(canvasRef.current!, {
        ...config,
        width: currentWidth * 2,
        height: currentWidth * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = currentWidth * 2;
          state.height = currentWidth * 2;
        },
      });

      console.log("Globe created successfully:", globe);
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
          console.log("Canvas opacity set to 1");
        }
      }, 0);
      
      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    } catch (error) {
      console.error("Error creating globe:", error);
    }
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[2000px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export function GlobeDemo() {
  return (
    <div className="relative w-full max-w-7xl mx-auto aspect-square min-h-[340px] sm:min-h-[380px] md:min-h-[520px] lg:min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <BigGlobe className="w-full h-full scale-[1.10] origin-center" />
      </div>
    </div>
  );
}
