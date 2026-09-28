import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import {
  FluidSimulation,
  attachPointerSplats,
  DefaultOverlayPass,
  ColorfulOverlayPass,
  RainbowInkOverlayPass,
  ChromaticDistortionPass,
  ColorWaterOverlayPass,
  VolumeCursorOverlayPass,
  SmokeOverlayPass,
  ArtInkOverlayPass,
} from 'three-fluid-fx';
import { Droplet, Sparkles, Sliders, Eye, EyeOff, RefreshCw } from 'lucide-react';

export type FluidStylePreset =
  | 'colorful'
  | 'amber_gold'
  | 'rainbow_ink'
  | 'chromatic'
  | 'color_water'
  | 'smoke'
  | 'art_ink';

interface FluidBackgroundProps {
  opacity?: number;
}

export const FluidBackground: React.FC<FluidBackgroundProps> = ({
  opacity = 0.85,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [stylePreset, setStylePreset] = useState<FluidStylePreset>('amber_gold');
  const [curlStrength, setCurlStrength] = useState<number>(0.7);
  const [splatForce, setSplatForce] = useState<number>(8);
  const [dissipation, setDissipation] = useState<number>(0.92);
  const [showControls, setShowControls] = useState<boolean>(false);

  const fluidRef = useRef<FluidSimulation | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const activePassRef = useRef<any>(null);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Three Scene & Camera for composer pipeline
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Fluid Simulation Instance
    const fluid = new FluidSimulation(renderer as any, {
      profile: 'balanced',
      curlStrength: curlStrength,
      splatForce: splatForce,
      splatRadius: 0.0006,
      densityDissipation: dissipation,
      velocityDissipation: 0.98,
    });
    fluid.enableDye = true;
    fluidRef.current = fluid;

    // Pointer Splat Listener attached to document.body for full-page interaction (single fluid mouse trail)
    const detachPointer = attachPointerSplats(document.body, fluid, {
      coloredStrokes: true,
      colorUpdateSpeed: 12,
      colorize: (dx, dy) => {
        if (stylePreset === 'amber_gold') {
          // Custom Amber / Gold / Cyan palette matching Jeshfique's theme
          const speed = Math.min(Math.hypot(dx, dy) * 0.005, 1);
          return [0.95, 0.6 + speed * 0.3, 0.1 + speed * 0.4];
        } else if (stylePreset === 'art_ink') {
          return [0.1, 0.8, 0.9];
        }
        return [Math.abs(dx) * 0.004, 0.5, Math.abs(dy) * 0.004];
      },
    });

    // EffectComposer for post-processing fluid overlays
    const composer = new EffectComposer(renderer as any);
    composer.addPass(new RenderPass(scene, camera) as any);

    // Instantiate appropriate pass according to stylePreset
    let effectPass: any = null;

    if (stylePreset === 'amber_gold' || stylePreset === 'colorful') {
      const pass = new ColorfulOverlayPass(fluid);
      pass.intensity = 1.2;
      effectPass = pass;
    } else if (stylePreset === 'rainbow_ink') {
      const pass = new RainbowInkOverlayPass(fluid);
      pass.intensity = 1.0;
      effectPass = pass;
    } else if (stylePreset === 'chromatic') {
      const pass = new ChromaticDistortionPass(fluid);
      pass.intensity = 0.8;
      effectPass = pass;
    } else if (stylePreset === 'color_water') {
      const pass = new ColorWaterOverlayPass(fluid);
      pass.intensity = 1.0;
      effectPass = pass;
    } else if (stylePreset === 'smoke') {
      const pass = new SmokeOverlayPass(fluid);
      pass.intensity = 0.9;
      effectPass = pass;
    } else {
      const pass = new ArtInkOverlayPass(fluid);
      pass.intensity = 1.1;
      effectPass = pass;
    }

    activePassRef.current = effectPass;
    composer.addPass(effectPass as any);
    composer.addPass(new OutputPass() as any);
    composerRef.current = composer;

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      // Update fluid parameters on the fly
      fluid.curlStrength = curlStrength;
      fluid.splatForce = splatForce;
      fluid.densityDissipation = dissipation;

      // Step fluid simulation & render composer pass
      fluid.step(delta);
      composer.render();
    };

    animationFrameId = requestAnimationFrame(animate);

    // Window Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      fluid.resize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      detachPointer();
      fluid.dispose();
      composer.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [enabled, stylePreset]);

  // Initial random splat trigger so fluid is visible immediately on page load
  const triggerInitialSplat = () => {
    if (fluidRef.current) {
      for (let i = 0; i < 4; i++) {
        const x = 0.2 + Math.random() * 0.6;
        const y = 0.2 + Math.random() * 0.6;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        fluidRef.current.addSplat(x, y, dx, dy, {
          radius: 0.0012,
          color: [0.95, 0.6, 0.15],
        });
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerInitialSplat();
    }, 600);
    return () => clearTimeout(timer);
  }, [enabled, stylePreset]);

  return (
    <>
      {/* Background WebGL Fluid Canvas */}
      {enabled && (
        <div
          ref={containerRef}
          className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
          style={{ opacity }}
        />
      )}

      {/* Floating Control Widget for three-fluid-fx */}
      <div className="fixed bottom-4 left-4 z-40 font-mono text-xs">
        <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-700/80 shadow-2xl">
          <button
            onClick={() => setEnabled(!enabled)}
            className={`p-2 rounded-xl transition-all ${
              enabled
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-500 hover:text-slate-300'
            }`}
            title={enabled ? 'Disable Fluid Dynamics' : 'Enable Fluid Dynamics'}
          >
            {enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowControls(!showControls)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              showControls
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Droplet className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">three-fluid-fx</span>
          </button>

          <button
            onClick={triggerInitialSplat}
            className="p-2 rounded-xl text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-all"
            title="Inject Fluid Burst"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Expanded Fluid FX Control Card */}
        {showControls && enabled && (
          <div className="mt-2.5 p-4 w-72 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/90 shadow-2xl space-y-3.5 animate-in slide-in-from-bottom duration-200 text-slate-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Fluid Simulation (three-fluid-fx)
              </span>
              <button
                onClick={() => setShowControls(false)}
                className="text-slate-500 hover:text-slate-300"
              >
                ✕
              </button>
            </div>

            {/* Presets */}
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Preset Shader Pass</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'amber_gold', label: 'Amber / Gold' },
                  { id: 'colorful', label: 'Vibrant Waves' },
                  { id: 'rainbow_ink', label: 'Rainbow Ink' },
                  { id: 'chromatic', label: 'Refraction' },
                  { id: 'color_water', label: 'Liquid Water' },
                  { id: 'smoke', label: 'Smoke Waves' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setStylePreset(p.id as FluidStylePreset)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-medium text-left truncate transition-all ${
                      stylePreset === p.id
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders for Live Tuning */}
            <div className="space-y-2 text-[11px]">
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Curl Strength (Vorticity)</span>
                  <span className="text-amber-300 font-bold">{curlStrength.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.05"
                  value={curlStrength}
                  onChange={(e) => setCurlStrength(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-950 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Splat Force</span>
                  <span className="text-amber-300 font-bold">{splatForce}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={splatForce}
                  onChange={(e) => setSplatForce(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-400 bg-slate-950 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Density Dissipation</span>
                  <span className="text-amber-300 font-bold">{dissipation.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.80"
                  max="0.99"
                  step="0.01"
                  value={dissipation}
                  onChange={(e) => setDissipation(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-950 rounded-lg cursor-pointer h-1.5"
                />
              </div>
            </div>

            <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-2 flex items-center justify-between">
              <span>Powered by Stable-Fluids</span>
              <button
                onClick={triggerInitialSplat}
                className="text-amber-400 hover:underline font-bold"
              >
                Trigger Splat ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
