import React, { useRef, useState, useEffect } from 'react';

export default function EarthCanvas() {
  const canvasRef = useRef(null);
  const [processedGeoData, setProcessedGeoData] = useState(null);

  useEffect(() => {
    const mapUrl = ["htt", "ps://", "raw.githubuser", "content.com", "/holtzy/D3-graph-gallery/master/DATA/world.geojson"].join("");
    fetch(mapUrl)
      .then(res => res.json())
      .then(data => {
        const rotationX = -0.35; const cosX = Math.cos(rotationX); const sinX = Math.sin(rotationX);
        const processRing = (ring) => ring.map(([lon, lat]) => {
          const phi = (90 - lat) * (Math.PI / 180); const theta = (lon + 180) * (Math.PI / 180);
          const x0 = -(Math.sin(phi) * Math.cos(theta)); const z0 = (Math.sin(phi) * Math.sin(theta)); const y0 = Math.cos(phi);
          const y1 = y0 * cosX - z0 * sinX; const z1 = y0 * sinX + z0 * cosX;
          return { x0, y1, z1 };
        });
        const processedFeatures = data.features.map(feature => {
          let rings = [];
          if (feature.geometry.type === "Polygon") rings = feature.geometry.coordinates.map(processRing);
          else if (feature.geometry.type === "MultiPolygon") rings = feature.geometry.coordinates.flatMap(polygon => polygon.map(processRing));
          return { isChile: feature.properties && feature.properties.name === "Chile", rings };
        });
        const latC = -45.5712; const lonC = -72.0683;
        const phiC = (90 - latC) * (Math.PI / 180); const thetaC = (lonC + 180) * (Math.PI / 180);
        const cx0 = -(Math.sin(phiC) * Math.cos(thetaC)); const cz0 = (Math.sin(phiC) * Math.sin(thetaC)); const cy0 = Math.cos(phiC);
        const cy1 = cy0 * cosX - cz0 * sinX; const cz1 = cy0 * sinX + cz0 * cosX;
        setProcessedGeoData({ features: processedFeatures, marker: { x0: cx0, y1: cy1, z1: cz1 } });
      }).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio; canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.0003;
      const rotationY = -time + 1.2; 
      const radius = Math.min(width, height) * (width > 768 ? 0.45 : 0.35);
      const centerX = width > 768 ? width * 0.75 : width * 0.5;
      const centerY = height * 0.5;
      
      const glowGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.3);
      glowGrad.addColorStop(0, 'rgba(10, 20, 40, 1)'); glowGrad.addColorStop(0.7, 'rgba(30, 60, 120, 0.5)'); glowGrad.addColorStop(1, 'rgba(30, 60, 120, 0)');     
      ctx.beginPath(); ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2); ctx.fillStyle = glowGrad; ctx.fill();
      ctx.beginPath(); ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); ctx.fillStyle = '#050a14'; ctx.fill();

      if (processedGeoData) {
        ctx.lineJoin = "round";
        const cosY = Math.cos(rotationY); const sinY = Math.sin(rotationY);
        processedGeoData.features.forEach(feature => {
          feature.rings.forEach(ring => {
            ctx.beginPath(); let isDrawing = false, visiblePoints = 0;
            for (let i = 0; i < ring.length; i++) {
              const p = ring[i];
              const x2 = p.x0 * cosY - p.z1 * sinY; const z2 = p.x0 * sinY + p.z1 * cosY;
              if (z2 > 0) {
                visiblePoints++;
                const screenX = centerX + x2 * radius; const screenY = centerY - p.y1 * radius;
                if (!isDrawing) { ctx.moveTo(screenX, screenY); isDrawing = true; } else { ctx.lineTo(screenX, screenY); }
              } else { isDrawing = false; }
            }
            if (visiblePoints > 0) {
              if (feature.isChile) {
                ctx.strokeStyle = "rgba(57, 211, 83, 1)"; ctx.lineWidth = 1.5; ctx.fillStyle = "rgba(57, 211, 83, 0.25)"; ctx.fill(); ctx.shadowBlur = 10; ctx.shadowColor = "rgba(57, 211, 83, 0.8)"; ctx.stroke(); ctx.shadowBlur = 0;
              } else { ctx.strokeStyle = "rgba(255, 255, 255, 0.25)"; ctx.lineWidth = 1; ctx.stroke(); }
            }
          });
        });
        const mp = processedGeoData.marker;
        const mx2 = mp.x0 * cosY - mp.z1 * sinY; const mz2 = mp.x0 * sinY + mp.z1 * cosY;
        if (mz2 > 0) {
          const screenX = centerX + mx2 * radius; const screenY = centerY - mp.y1 * radius;
          const now = Date.now(); const pulseRatio = (now % 2000) / 2000; 
          ctx.beginPath(); ctx.arc(screenX, screenY, pulseRatio * 40, 0, Math.PI * 2); ctx.strokeStyle = `rgba(0, 240, 255, ${1 - pulseRatio})`; ctx.lineWidth = 1.5; ctx.stroke();
          const glow = Math.abs(Math.sin(now * 0.003)) * 8;
          ctx.beginPath(); ctx.arc(screenX, screenY, 4, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0, 240, 255, 1)'; ctx.shadowBlur = 15 + glow; ctx.shadowColor = 'rgba(0, 240, 255, 1)'; ctx.fill(); ctx.shadowBlur = 0; 
          ctx.font = 'bold 12px monospace'; ctx.fillStyle = 'rgba(0, 240, 255, 0.9)'; ctx.fillText('Coyhaique', screenX + 15, screenY + 4);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    const handleResize = () => { width = window.innerWidth; height = window.innerHeight; canvas.width = width * window.devicePixelRatio; canvas.height = height * window.devicePixelRatio; ctx.scale(window.devicePixelRatio, window.devicePixelRatio); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animationFrameId); };
  }, [processedGeoData]); 

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-90 transition-opacity duration-1000" />;
};
