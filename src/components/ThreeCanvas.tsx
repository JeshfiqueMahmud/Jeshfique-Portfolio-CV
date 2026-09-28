import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import {
  FluidSimulation,
  attachPointerSplats,
  ColorfulOverlayPass,
  RainbowInkOverlayPass,
} from 'three-fluid-fx';

interface ThreeCanvasProps {
  mode?: 'nodes' | 'matrix' | 'particles' | 'fluid';
  interactive?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  mode = 'nodes',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'nodes' | 'matrix' | 'particles' | 'fluid'>(mode);
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf59e0b, 1.5, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 1.5, 100);
    pointLight2.position.set(-20, -20, -20);
    scene.add(pointLight2);

    // Objects container
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Fluid FX setup variables
    let fluid: FluidSimulation | null = null;
    let composer: EffectComposer | null = null;
    let detachPointerSplats: (() => void) | null = null;

    // Build Scene Objects according to activeMode
    let particleSystem: THREE.Points | null = null;
    let nodeGroup: THREE.Group | null = null;
    let matrixMesh: THREE.InstancedMesh | null = null;

    if (activeMode === 'fluid') {
      fluid = new FluidSimulation(renderer as any, {
        profile: 'balanced',
        curlStrength: 0.8,
        splatForce: 10,
        splatRadius: 0.0008,
        densityDissipation: 0.91,
      });
      fluid.enableDye = true;

      detachPointerSplats = attachPointerSplats(renderer.domElement, fluid, {
        coloredStrokes: true,
        colorUpdateSpeed: 10,
        colorize: (dx, dy) => [0.95, Math.min(Math.abs(dx) * 0.005, 0.8), Math.min(Math.abs(dy) * 0.005, 0.9)],
      });

      // Initial burst
      for (let i = 0; i < 3; i++) {
        fluid.addSplat(0.3 + i * 0.2, 0.5, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150, {
          color: [0.95, 0.6, 0.2],
        });
      }

      composer = new EffectComposer(renderer as any);
      composer.addPass(new RenderPass(scene, camera) as any);
      const overlayPass = new ColorfulOverlayPass(fluid);
      overlayPass.intensity = 1.2;
      composer.addPass(overlayPass as any);
      composer.addPass(new OutputPass() as any);
    } else if (activeMode === 'nodes') {
      nodeGroup = new THREE.Group();
      const nodeCount = 35;
      const nodes: THREE.Vector3[] = [];
      const nodeGeometry = new THREE.DodecahedronGeometry(0.7, 1);
      
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: false,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4,
      });

      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0xd97706,
        emissiveIntensity: 0.5,
      });

      for (let i = 0; i < nodeCount; i++) {
        const isGold = i % 5 === 0;
        const mesh = new THREE.Mesh(nodeGeometry, isGold ? goldMaterial : nodeMaterial);
        const pos = new THREE.Vector3(
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 30
        );
        mesh.position.copy(pos);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        nodeGroup.add(mesh);
        nodes.push(pos);
      }

      // Lines connecting close nodes (Blockchain Network Mesh)
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 });
      const linePositions: number[] = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].distanceTo(nodes[j]);
          if (dist < 12) {
            linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
            linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      nodeGroup.add(linesMesh);

      mainGroup.add(nodeGroup);
    } else if (activeMode === 'particles') {
      const particleCount = 1200;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color(0x3b82f6);
      const color2 = new THREE.Color(0xf59e0b);

      for (let i = 0; i < particleCount; i++) {
        const radius = 10 + Math.random() * 25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const mixedColor = color1.clone().lerp(color2, Math.random());
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      const pGeometry = new THREE.BufferGeometry();
      pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const pMaterial = new THREE.PointsMaterial({
        size: 0.35,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });

      particleSystem = new THREE.Points(pGeometry, pMaterial);
      mainGroup.add(particleSystem);
    } else {
      // Matrix Mode (Instanced Boxes)
      const count = 100;
      const boxGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        roughness: 0.2,
        wireframe: true,
      });

      matrixMesh = new THREE.InstancedMesh(boxGeo, boxMat, count);
      const dummy = new THREE.Object3D();

      for (let i = 0; i < count; i++) {
        dummy.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30
        );
        dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        const scale = 0.5 + Math.random() * 1.2;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        matrixMesh.setMatrixAt(i, dummy.matrix);
      }
      matrixMesh.instanceMatrix.needsUpdate = true;
      mainGroup.add(matrixMesh);
    }

    // Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / windowHalfX;
      mouseY = (e.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth || window.innerWidth;
      const newH = mount.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      if (composer) composer.setSize(newW, newH);
      if (fluid) fluid.resize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.05);

      // FPS tracking
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = currentTime;
      }

      // Smooth inertia rotation following mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x = targetY * 0.3;
      mainGroup.rotation.y += targetX * 0.01;

      if (nodeGroup) {
        nodeGroup.children.forEach((child, idx) => {
          if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
            child.rotation.y += 0.008;
          }
        });
      }

      if (particleSystem) {
        particleSystem.rotation.y -= 0.0015;
      }

      if (fluid && composer) {
        fluid.step(delta);
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (detachPointerSplats) detachPointerSplats();
      if (fluid) fluid.dispose();
      if (composer) composer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeMode, interactive]);

  return (
    <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      
      {/* 3D Mode Switcher Overlay */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/60 text-xs shadow-lg">
        <button
          onClick={() => setActiveMode('fluid')}
          className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
            activeMode === 'fluid'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🌊 Fluid FX
        </button>
        <button
          onClick={() => setActiveMode('nodes')}
          className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
            activeMode === 'nodes'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          ⛓️ Block Nodes
        </button>
        <button
          onClick={() => setActiveMode('particles')}
          className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
            activeMode === 'particles'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🌌 Galaxy
        </button>
        <button
          onClick={() => setActiveMode('matrix')}
          className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
            activeMode === 'matrix'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          💚 Matrix
        </button>
        <span className="hidden sm:inline-block ml-1 text-[10px] text-slate-500 font-mono pl-1 border-l border-slate-800">
          {fps} FPS
        </span>
      </div>

      <div className="absolute bottom-3 left-4 z-20 pointer-events-none text-[11px] text-slate-400/80 font-mono bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800/80">
        🖱️ Interactive Three.js WebGL Engine {activeMode === 'fluid' && '(three-fluid-fx Stable Fluids)'}
      </div>
    </div>
  );
};
