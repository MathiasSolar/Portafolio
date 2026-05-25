import React, { useRef, useState, useEffect } from 'react';

// Pre-seed cloud positions (6-8 elliptical cloud patches)
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

// City light positions (major cities approximate lon/lat)
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
  const [processedGeoData, setProcessedGeoData] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // Theme detection via MutationObserver
  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains('light-mode'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Fetch and pre-process GeoJSON data
  useEffect(() => {
    const mapUrl = ["htt", "ps://", "raw.githubuser", "content.com", "/holtzy/D3-graph-gallery/master/DATA/world.geojson"].join("");
    fetch(mapUrl)
      .then(res => res.json())
      .then(data => {
        const rotationX = -0.35;
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);

        const processRing = (ring) => ring.map(([lon, lat]) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          const x0 = -(Math.sin(phi) * Math.cos(theta));
          const z0 = Math.sin(phi) * Math.sin(theta);
          const y0 = Math.cos(phi);
          const y1 = y0 * cosX - z0 * sinX;
          const z1 = y0 * sinX + z0 * cosX;
          return { x0, y1, z1 };
        });

        const processedFeatures = data.features
          .map(feature => {
            let rings = [];
            if (feature.geometry.type === "Polygon") {
              rings = feature.geometry.coordinates.map(processRing);
            } else if (feature.geometry.type === "MultiPolygon") {
              rings = feature.geometry.coordinates.flatMap(polygon => polygon.map(processRing));
            }
            return {
              isChile: feature.properties && feature.properties.name === "Chile",
              rings,
            };
          });

        // Pre-process Coyhaique marker
        const latC = -45.5712, lonC = -72.0683;
        const phiC = (90 - latC) * (Math.PI / 180);
        const thetaC = (lonC + 180) * (Math.PI / 180);
        const cx0 = -(Math.sin(phiC) * Math.cos(thetaC));
        const cz0 = Math.sin(phiC) * Math.sin(thetaC);
        const cy0 = Math.cos(phiC);
        const cy1 = cy0 * cosX - cz0 * sinX;
        const cz1 = cy0 * sinX + cz0 * cosX;

        // Pre-process city lights
        const processedCities = CITY_LIGHTS.map(({ lon, lat }) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          const x0 = -(Math.sin(phi) * Math.cos(theta));
          const z0 = Math.sin(phi) * Math.sin(theta);
          const y0 = Math.cos(phi);
          const y1 = y0 * cosX - z0 * sinX;
          const z1 = y0 * sinX + z0 * cosX;
          return { x0, y1, z1 };
        });

        setProcessedGeoData({
          features: processedFeatures,
          marker: { x0: cx0, y1: cy1, z1: cz1 },
          cities: processedCities,
        });
      })
      .catch(err => console.error(err));
  }, []);

  // Main render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Light direction (normalized) — from top-left
    const lightDirX = -0.55;
    const lightDirY = -0.7;
    const lightDirZ = -0.45;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.0002;
      const rotationY = -time + 1.2;
      const cloudRotationY = -time * 1.15 + 1.2; // Clouds rotate slightly faster for parallax

      const radius = Math.min(width, height) * (width > 768 ? 0.45 : 0.35);
      const centerX = width > 768 ? width * 0.75 : width * 0.5;
      const centerY = height * 0.5;

      const isLight = document.documentElement.classList.contains('light-mode');

      // ── COLOR PALETTE ──
      // Gradiente del océano para simular profundidad e iluminación esférica
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

      // Tonos realistas: Continentes verdes con toques marrones, costas arenosas
      const continentFill = isLight ? 'rgba(125, 168, 114, 0.7)' : 'rgba(34, 76, 51, 0.72)';
      const continentStroke = isLight ? 'rgba(195, 180, 150, 0.65)' : 'rgba(168, 149, 114, 0.35)';
      const chileFill = isLight ? 'rgba(34, 197, 94, 0.5)' : 'rgba(34, 197, 94, 0.55)';
      const chileStroke = isLight ? 'rgba(22, 163, 74, 0.95)' : 'rgba(34, 211, 238, 0.9)';
      const cloudColor = isLight ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)';
      const markerColor = isLight ? 'rgba(234, 88, 12, 0.95)' : 'rgba(249, 115, 22, 0.95)';
      const markerGlowColor = isLight ? 'rgba(234, 88, 12, 0.6)' : 'rgba(249, 115, 22, 0.6)';

      // ── 1. ATMOSPHERIC GLOW (behind the planet) ──
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

      // ── 2. PLANET BASE (ocean sphere with radial gradient) ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // Clip all planet content to the sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      // ── 3. CONTINENTS (filled polygons) ──
      if (processedGeoData) {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        // Max screen-space jump threshold — anything larger is a wrapping artifact
        const jumpThreshold = radius * 0.30;

        processedGeoData.features.forEach(feature => {
          feature.rings.forEach(ring => {
            ctx.beginPath();
            let hasVisible = false;
            let prevX = null;
            let prevY = null;

            for (let i = 0; i < ring.length; i++) {
              const p = ring[i];
              const x2 = p.x0 * cosY - p.z1 * sinY;
              const z2 = p.x0 * sinY + p.z1 * cosY;
              if (z2 > 0) {
                hasVisible = true;
                const screenX = centerX + x2 * radius;
                const screenY = centerY - p.y1 * radius;

                // Detect wrap-around jumps (pole artifacts) and break the path
                const isJump = prevX !== null && (
                  Math.abs(screenX - prevX) > jumpThreshold ||
                  Math.abs(screenY - prevY) > jumpThreshold
                );

                if (prevX === null || isJump) {
                  ctx.moveTo(screenX, screenY);
                } else {
                  ctx.lineTo(screenX, screenY);
                }
                prevX = screenX;
                prevY = screenY;
              } else {
                prevX = null;
                prevY = null;
              }
            }

            if (hasVisible) {
              ctx.closePath();
              if (feature.isChile) {
                ctx.fillStyle = chileFill;
                ctx.fill();
                ctx.strokeStyle = chileStroke;
                ctx.lineWidth = 1.8;
                ctx.stroke();
              } else {
                ctx.fillStyle = continentFill;
                ctx.fill();
                ctx.strokeStyle = continentStroke;
                ctx.lineWidth = 0.7;
                ctx.stroke();
              }
            }
          });
        });

        // ── 4. CLOUD LAYER (parallax rotation) ──
        const cosCloudY = Math.cos(cloudRotationY);
        const sinCloudY = Math.sin(cloudRotationY);
        const rotationX = -0.35;
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);

        CLOUD_PATCHES.forEach(cloud => {
          // Generate cloud patch points as an ellipse on the sphere
          const steps = 24;
          const points = [];
          let anyVisible = false;

          for (let i = 0; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2;
            const cloudLon = cloud.lonCenter + Math.cos(angle) * cloud.width * 0.5;
            const cloudLat = cloud.latCenter + Math.sin(angle) * cloud.height * 0.5;

            const phi = (90 - cloudLat) * (Math.PI / 180);
            const theta = (cloudLon + 180) * (Math.PI / 180);
            const x0 = -(Math.sin(phi) * Math.cos(theta));
            const z0 = Math.sin(phi) * Math.sin(theta);
            const y0 = Math.cos(phi);
            const y1 = y0 * cosX - z0 * sinX;
            const z1 = y0 * sinX + z0 * cosX;

            // Apply cloud rotation
            const x2 = x0 * cosCloudY - z1 * sinCloudY;
            const z2 = x0 * sinCloudY + z1 * cosCloudY;

            if (z2 > 0.05) {
              // Check if on the lit side (dot product with light direction in screen space)
              const litAmount = -(x2 * lightDirX + y1 * lightDirY + z2 * lightDirZ);
              if (litAmount > 0.1) {
                anyVisible = true;
                points.push({
                  sx: centerX + x2 * radius,
                  sy: centerY - y1 * radius,
                  lit: Math.min(litAmount, 1),
                });
              } else {
                points.push(null);
              }
            } else {
              points.push(null);
            }
          }

          if (anyVisible) {
            ctx.beginPath();
            let started = false;
            for (let i = 0; i < points.length; i++) {
              if (points[i]) {
                if (!started) {
                  ctx.moveTo(points[i].sx, points[i].sy);
                  started = true;
                } else {
                  ctx.lineTo(points[i].sx, points[i].sy);
                }
              }
            }
            ctx.closePath();
            const avgLit = points.filter(Boolean).reduce((s, p) => s + p.lit, 0) / (points.filter(Boolean).length || 1);
            const cloudAlpha = isLight ? 0.3 * cloud.opacity * avgLit : 0.12 * cloud.opacity * avgLit;
            ctx.fillStyle = `rgba(255, 255, 255, ${cloudAlpha.toFixed(3)})`;
            ctx.fill();
          }
        });

        // ── 5. SPHERE SHADING (3D curvature, light from top-left) ──
        // Lit highlight
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

        // ── 6. CITY LIGHTS ON DARK SIDE ──
        if (!isLight && processedGeoData.cities) {
          const now = Date.now();
          processedGeoData.cities.forEach((city, idx) => {
            const x2 = city.x0 * cosY - city.z1 * sinY;
            const z2 = city.x0 * sinY + city.z1 * cosY;

            if (z2 > 0.05) {
              // Check if on the dark side
              const litAmount = -(x2 * lightDirX + city.y1 * lightDirY + z2 * lightDirZ);
              if (litAmount < 0.15) {
                const screenX = centerX + x2 * radius;
                const screenY = centerY - city.y1 * radius;

                // Subtle twinkle
                const twinkle = 0.5 + 0.5 * Math.sin(now * 0.003 + idx * 1.7);
                const alpha = (0.4 + twinkle * 0.5) * Math.min(1, (0.15 - litAmount) * 5);

                // Glow
                const cityGlow = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, 4);
                cityGlow.addColorStop(0, `rgba(255, 230, 150, ${(alpha * 0.9).toFixed(3)})`);
                cityGlow.addColorStop(0.5, `rgba(255, 200, 100, ${(alpha * 0.3).toFixed(3)})`);
                cityGlow.addColorStop(1, 'rgba(255, 200, 100, 0)');

                ctx.beginPath();
                ctx.arc(screenX, screenY, 4, 0, Math.PI * 2);
                ctx.fillStyle = cityGlow;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(screenX, screenY, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 240, 200, ${alpha.toFixed(3)})`;
                ctx.fill();
              }
            }
          });
        }

        // ── 7. COYHAIQUE MARKER ──
        const mp = processedGeoData.marker;
        const mx2 = mp.x0 * cosY - mp.z1 * sinY;
        const mz2 = mp.x0 * sinY + mp.z1 * cosY;

        if (mz2 > 0) {
          const screenX = centerX + mx2 * radius;
          const screenY = centerY - mp.y1 * radius;
          const now = Date.now();
          const pulseRatio = (now % 2000) / 2000;

          // Expanding pulse ring
          ctx.beginPath();
          ctx.arc(screenX, screenY, pulseRatio * 52, 0, Math.PI * 2);
          ctx.strokeStyle = isLight
            ? `rgba(234, 88, 12, ${(1 - pulseRatio).toFixed(3)})`
            : `rgba(249, 115, 22, ${(1 - pulseRatio).toFixed(3)})`;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Second staggered pulse
          const pulseRatio2 = ((now + 1000) % 2000) / 2000;
          ctx.beginPath();
          ctx.arc(screenX, screenY, pulseRatio2 * 52, 0, Math.PI * 2);
          ctx.strokeStyle = isLight
            ? `rgba(234, 88, 12, ${((1 - pulseRatio2) * 0.5).toFixed(3)})`
            : `rgba(249, 115, 22, ${((1 - pulseRatio2) * 0.5).toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Glowing core dot
          const glow = Math.abs(Math.sin(now * 0.003)) * 10;
          ctx.beginPath();
          ctx.arc(screenX, screenY, 6.5, 0, Math.PI * 2);
          ctx.fillStyle = markerColor;
          ctx.shadowBlur = isLight ? 12 + glow * 0.5 : 24 + glow;
          ctx.shadowColor = markerGlowColor;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Label
          ctx.font = 'bold 11px Inter, system-ui, sans-serif';
          ctx.fillStyle = markerColor;
          ctx.fillText('Coyhaique', screenX + 14, screenY + 4);
        }
      }

      // Restore context (unclip)
      ctx.restore();

      // ── 8. ATMOSPHERE RIM LIGHT (on top of planet edge) ──
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
      const newDpr = window.devicePixelRatio || 1;
      canvas.width = width * newDpr;
      canvas.height = height * newDpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(newDpr, newDpr);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [processedGeoData]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-90 transition-opacity duration-1000 ${
        isLightMode ? 'mix-blend-normal' : 'mix-blend-screen'
      }`}
    />
  );
}
