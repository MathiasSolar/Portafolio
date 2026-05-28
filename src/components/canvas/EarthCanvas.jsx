import React, { useRef, useState, useEffect } from 'react';
import { geoOrthographic, geoPath } from 'd3-geo';

// Pre-seed cloud positions
const CLOUD_PATCHES = [
  { lonCenter: 30, latCenter: 25, width: 35, height: 8, opacity: 1.0 },
  { lonCenter: -60, latCenter: 10, width: 40, height: 10, opacity: 0.85 },
  { lonCenter: 120, latCenter: -20, width: 30, height: 7, opacity: 0.9 },
  { lonCenter: -120, latCenter: 40, width: 45, height: 9, opacity: 0.75 },
  { lonCenter: 80, latCenter: -40, width: 28, height: 6, opacity: 0.95 },
  { lonCenter: -10, latCenter: 50, width: 50, height: 11, opacity: 0.7 },
  { lonCenter: 170, latCenter: 15, width: 32, height: 8, opacity: 0.8 },
  { lonCenter: -90, latCenter: -35, width: 38, height: 9, opacity: 0.65 },
];

// City light positions
const CITY_LIGHTS = [
  // North America
  { lon: -74, lat: 40.7 }, { lon: -87.6, lat: 41.9 }, { lon: -118.2, lat: 34.1 },
  { lon: -122.4, lat: 37.8 }, { lon: -95.4, lat: 29.8 }, { lon: -79.4, lat: 43.7 },
  { lon: -99.1, lat: 19.4 },
  // South America
  { lon: -43.2, lat: -22.9 }, { lon: -46.6, lat: -23.6 }, { lon: -58.4, lat: -34.6 },
  { lon: -70.6, lat: -33.4 }, { lon: -77, lat: -12 }, { lon: -66.9, lat: 10.5 },
  // Europe
  { lon: -0.1, lat: 51.5 }, { lon: 2.3, lat: 48.9 }, { lon: 13.4, lat: 52.5 },
  { lon: 12.5, lat: 41.9 }, { lon: -3.7, lat: 40.4 }, { lon: 37.6, lat: 55.8 },
  { lon: 30.5, lat: 50.4 }, { lon: 23.7, lat: 38 }, { lon: 14.4, lat: 50.1 },
  // Asia
  { lon: 139.7, lat: 35.7 }, { lon: 121.5, lat: 31.2 }, { lon: 116.4, lat: 39.9 },
  { lon: 77.2, lat: 28.6 }, { lon: 72.9, lat: 19 }, { lon: 126.9, lat: 37.6 },
  { lon: 100.5, lat: 13.8 }, { lon: 106.8, lat: -6.2 }, { lon: 103.8, lat: 1.4 },
  { lon: 55.3, lat: 25.3 }, { lon: 51.5, lat: 25.3 },
  // Africa
  { lon: 31.2, lat: 30 }, { lon: 3.4, lat: 6.5 }, { lon: 28, lat: -26.2 },
  { lon: 36.8, lat: -1.3 }, { lon: 32.6, lat: 0.3 },
  // Oceania
  { lon: 151.2, lat: -33.9 }, { lon: 174.8, lat: -41.3 },
];

export default function EarthCanvas() {
  const canvasRef = useRef(null);
  const [geoData, setGeoData] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // Theme detection
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const checkTheme = () => setIsLightMode(document.documentElement.classList.contains('light-mode'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Fetch GeoJSON
  useEffect(() => {
    const mapUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
    fetch(mapUrl)
      .then(res => res.json())
      .then(data => {
        // Tag Chile
        data.features.forEach(f => {
          if (f.properties.name === 'Chile') f.isChile = true;
        });
        setGeoData(data);
      })
      .catch(err => console.error(err));
  }, []);

  // Render Loop
  useEffect(() => {
    if (!geoData) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Light direction (normalized)
    const lightDirX = -0.55;
    const lightDirY = -0.7;
    const lightDirZ = -0.45;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.0002;
      const rotationDeg = -time * 50 + 60; 
      const cloudRotationDeg = -time * 55 + 60; // Parallax

      // Restaurada tu posición original (alineado a la derecha en escritorio)
      const radius = width > 1024 ? height * 0.45 : Math.min(width, height) * 0.4;
      const centerX = width > 1024 ? width * 0.75 : width * 0.5;
      const centerY = height * 0.5;

      const isLight = document.documentElement.classList.contains('light-mode');

      // Colors
      const oceanGrad = ctx.createRadialGradient(
        centerX - radius * 0.2, centerY - radius * 0.2, radius * 0.2,
        centerX, centerY, radius
      );
      if (isLight) {
        oceanGrad.addColorStop(0, '#a2c2e8');
        oceanGrad.addColorStop(0.6, '#729ecb');
        oceanGrad.addColorStop(1, '#537ea8');
      } else {
        oceanGrad.addColorStop(0, '#102754');
        oceanGrad.addColorStop(0.5, '#071638');
        oceanGrad.addColorStop(1, '#020712');
      }

      const continentFill = isLight ? 'rgba(125, 168, 114, 0.7)' : 'rgba(34, 76, 51, 0.72)';
      const continentStroke = isLight ? 'rgba(195, 180, 150, 0.65)' : 'rgba(168, 149, 114, 0.35)';
      const chileFill = isLight ? 'rgba(34, 197, 94, 0.5)' : 'rgba(34, 197, 94, 0.55)';
      const chileStroke = isLight ? 'rgba(22, 163, 74, 0.95)' : 'rgba(34, 211, 238, 0.9)';
      const markerColor = isLight ? 'rgba(234, 88, 12, 0.95)' : 'rgba(249, 115, 22, 0.95)';
      const markerGlowColor = isLight ? 'rgba(234, 88, 12, 0.6)' : 'rgba(249, 115, 22, 0.6)';

      // 1. Atmosphere Glow
      const glowRadius = radius * 1.35;
      const atmosGlow = ctx.createRadialGradient(
        centerX - radius * 0.15, centerY - radius * 0.15, radius * 0.85,
        centerX, centerY, glowRadius
      );
      if (isLight) {
        atmosGlow.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
        atmosGlow.addColorStop(0.4, 'rgba(56, 189, 248, 0.08)');
        atmosGlow.addColorStop(0.7, 'rgba(59, 130, 246, 0.03)');
        atmosGlow.addColorStop(1, 'rgba(59, 130, 246, 0)');
      } else {
        atmosGlow.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
        atmosGlow.addColorStop(0.4, 'rgba(56, 189, 248, 0.12)');
        atmosGlow.addColorStop(0.7, 'rgba(99, 102, 241, 0.04)');
        atmosGlow.addColorStop(1, 'rgba(99, 102, 241, 0)');
      }
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = atmosGlow;
      ctx.fill();

      // Setup D3 Projection - ¡Aquí está el cambio principal a 0 grados!
      const projection = geoOrthographic()
        .translate([centerX, centerY])
        .scale(radius)
        .rotate([rotationDeg, 0, 0]) // Cambiado de 35 a 0 para ponerlo derecho
        .clipAngle(90);

      const pathGenerator = geoPath().projection(projection).context(ctx);

      // 2. Ocean
      ctx.beginPath();
      pathGenerator({ type: 'Sphere' });
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // 3. Continents (Perfect rendering via D3)
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      
      // Draw base continents
      ctx.beginPath();
      geoData.features.forEach(feature => {
        if (!feature.isChile) pathGenerator(feature);
      });
      ctx.fillStyle = continentFill;
      ctx.fill();
      ctx.strokeStyle = continentStroke;
      ctx.lineWidth = 0.7;
      ctx.stroke();

      // Draw Chile highlighted
      const chileFeature = geoData.features.find(f => f.isChile);
      if (chileFeature) {
        ctx.beginPath();
        pathGenerator(chileFeature);
        ctx.fillStyle = chileFill;
        ctx.fill();
        ctx.strokeStyle = chileStroke;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      // Projection manual math for lights and clouds
      const rotationRadY = (rotationDeg * Math.PI) / 180;
      
      // ¡Y aquí está el segundo cambio necesario para sincronizar el 3D manual!
      const rotationRadX = 0; // Cambiado de (35 * Math.PI) / 180 a 0
      
      const cosY = Math.cos(rotationRadY);
      const sinY = Math.sin(rotationRadY);
      const cosX = Math.cos(rotationRadX);
      const sinX = Math.sin(rotationRadX);

      const projectPoint = (lon, lat, rY = rotationRadY) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        // Base sphere coords
        const x0 = -(Math.sin(phi) * Math.cos(theta));
        const z0 = Math.sin(phi) * Math.sin(theta);
        const y0 = Math.cos(phi);
        
        // Rotate X
        const y1 = y0 * cosX - z0 * sinX;
        const z1 = y0 * sinX + z0 * cosX;

        // Rotate Y
        const cY = Math.cos(rY);
        const sY = Math.sin(rY);
        const x2 = x0 * cY - z1 * sY;
        const z2 = x0 * sY + z1 * cY;

        return { x: x2, y: y1, z: z2 };
      };

      // 4. Clouds (parallax)
      const cloudRadY = (cloudRotationDeg * Math.PI) / 180;
      CLOUD_PATCHES.forEach(cloud => {
        const steps = 24;
        const points = [];
        let anyVisible = false;

        for (let i = 0; i <= steps; i++) {
          const angle = (i / steps) * Math.PI * 2;
          const cloudLon = cloud.lonCenter + Math.cos(angle) * cloud.width * 0.5;
          const cloudLat = cloud.latCenter + Math.sin(angle) * cloud.height * 0.5;
          
          const p = projectPoint(cloudLon, cloudLat, cloudRadY);
          
          if (p.z > 0.05) {
            const litAmount = -(p.x * lightDirX + p.y * lightDirY + p.z * lightDirZ);
            if (litAmount > 0.1) {
              anyVisible = true;
              points.push({ sx: centerX + p.x * radius, sy: centerY - p.y * radius, lit: Math.min(litAmount, 1) });
            } else points.push(null);
          } else points.push(null);
        }

        if (anyVisible) {
          ctx.beginPath();
          let started = false;
          for (let i = 0; i < points.length; i++) {
            if (points[i]) {
              if (!started) { ctx.moveTo(points[i].sx, points[i].sy); started = true; }
              else ctx.lineTo(points[i].sx, points[i].sy);
            }
          }
          ctx.closePath();
          const valid = points.filter(Boolean);
          const avgLit = valid.reduce((s, p) => s + p.lit, 0) / (valid.length || 1);
          const cloudAlpha = isLight ? 0.3 * cloud.opacity * avgLit : 0.12 * cloud.opacity * avgLit;
          ctx.fillStyle = `rgba(255, 255, 255, ${cloudAlpha.toFixed(3)})`;
          ctx.fill();
        }
      });

      // 5. Sphere 3D Shading
      const highlightX = centerX - radius * 0.35;
      const highlightY = centerY - radius * 0.35;
      const shading = ctx.createRadialGradient(
        highlightX, highlightY, radius * 0.05,
        centerX + radius * 0.15, centerY + radius * 0.15, radius * 1.1
      );
      if (isLight) {
        shading.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
        shading.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
        shading.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
        shading.addColorStop(0.85, 'rgba(0, 0, 0, 0.15)');
        shading.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      } else {
        shading.addColorStop(0, 'rgba(150, 180, 255, 0.18)');
        shading.addColorStop(0.25, 'rgba(100, 140, 220, 0.06)');
        shading.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        shading.addColorStop(0.75, 'rgba(0, 0, 0, 0.35)');
        shading.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
      }
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = shading;
      ctx.fill();

      // 6. City Lights on Dark Side
      if (!isLight) {
        const now = Date.now();
        CITY_LIGHTS.forEach((city, idx) => {
          const p = projectPoint(city.lon, city.lat);
          if (p.z > 0.05) {
            const litAmount = -(p.x * lightDirX + p.y * lightDirY + p.z * lightDirZ);
            if (litAmount < 0.15) {
              const screenX = centerX + p.x * radius;
              const screenY = centerY - p.y * radius;
              const twinkle = 0.5 + 0.5 * Math.sin(now * 0.003 + idx * 1.7);
              const alpha = (0.4 + twinkle * 0.5) * Math.min(1, (0.15 - litAmount) * 5);

              const cityGlow = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, 4);
              cityGlow.addColorStop(0, `rgba(255, 230, 150, ${(alpha * 0.9).toFixed(3)})`);
              cityGlow.addColorStop(0.5, `rgba(255, 200, 100, ${(alpha * 0.3).toFixed(3)})`);
              cityGlow.addColorStop(1, 'rgba(255, 200, 100, 0)');

              ctx.beginPath(); ctx.arc(screenX, screenY, 4, 0, Math.PI * 2); ctx.fillStyle = cityGlow; ctx.fill();
              ctx.beginPath(); ctx.arc(screenX, screenY, 1, 0, Math.PI * 2); ctx.fillStyle = `rgba(255, 240, 200, ${alpha.toFixed(3)})`; ctx.fill();
            }
          }
        });
      }

      // 7. Coyhaique Marker
      // projection() returns null when the point is clipped (behind the globe)
      const coyhaiqueLon = -72.0683;
      const coyhaiqueLat = -45.5712;
      const pointCoords = projection([coyhaiqueLon, coyhaiqueLat]);

      if (pointCoords) {
        const screenX = pointCoords[0];
        const screenY = pointCoords[1];
        const now = Date.now();
        const pulseRatio = (now % 2000) / 2000;

        ctx.beginPath();
        ctx.arc(screenX, screenY, pulseRatio * 52, 0, Math.PI * 2);
        ctx.strokeStyle = isLight ? `rgba(234, 88, 12, ${(1 - pulseRatio).toFixed(3)})` : `rgba(249, 115, 22, ${(1 - pulseRatio).toFixed(3)})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        const pulseRatio2 = ((now + 1000) % 2000) / 2000;
        ctx.beginPath();
        ctx.arc(screenX, screenY, pulseRatio2 * 52, 0, Math.PI * 2);
        ctx.strokeStyle = isLight ? `rgba(234, 88, 12, ${((1 - pulseRatio2) * 0.5).toFixed(3)})` : `rgba(249, 115, 22, ${((1 - pulseRatio2) * 0.5).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        const glow = Math.abs(Math.sin(now * 0.003)) * 10;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = markerColor;
        ctx.shadowBlur = isLight ? 12 + glow * 0.5 : 24 + glow;
        ctx.shadowColor = markerGlowColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = 'bold 11px Inter, system-ui, sans-serif';
        ctx.fillStyle = markerColor;
        ctx.fillText('Coyhaique', screenX + 14, screenY + 4);
      }

      // 8. Atmosphere Rim Light
      const rimGlow = ctx.createRadialGradient(
        centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.8,
        centerX, centerY, radius * 1.05
      );
      if (isLight) {
        rimGlow.addColorStop(0, 'rgba(56, 189, 248, 0)');
        rimGlow.addColorStop(0.88, 'rgba(56, 189, 248, 0)');
        rimGlow.addColorStop(0.95, 'rgba(56, 189, 248, 0.08)');
        rimGlow.addColorStop(1, 'rgba(56, 189, 248, 0.15)');
      } else {
        rimGlow.addColorStop(0, 'rgba(56, 189, 248, 0)');
        rimGlow.addColorStop(0.88, 'rgba(56, 189, 248, 0)');
        rimGlow.addColorStop(0.95, 'rgba(56, 189, 248, 0.15)');
        rimGlow.addColorStop(1, 'rgba(56, 189, 248, 0.32)');
      }
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.fillStyle = rimGlow;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [geoData]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-90 transition-opacity duration-1000 ${
        isLightMode ? 'mix-blend-normal' : 'mix-blend-screen'
      }`}
    />
  );
}
