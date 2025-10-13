"use client";

import { useEffect, useRef, useState } from "react";

const loadSpline = async (canvas: HTMLCanvasElement) => {
  const { Application } = await import("@splinetool/runtime");
  const app = new Application(canvas);
  await app.load("/scene.splinecode");
  return app;
};

export function Phone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let app: Awaited<ReturnType<typeof loadSpline>> | undefined;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      // Spline automatically updates its view when the canvas size changes
    };

    loadSpline(canvas)
      .then((instance) => {
        if (isMounted) {
          app = instance;
          setIsLoading(false);
          resizeCanvas();
          window.addEventListener("resize", resizeCanvas);
        } else {
          instance.dispose();
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resizeCanvas);
      app?.dispose();
    };
  }, []);

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{ height: "clamp(60vh, 80vh, 85vh)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0" />
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="text-sm">Loading 3D experience...</span>
        </div>
      )}
    </section>
  );
}
