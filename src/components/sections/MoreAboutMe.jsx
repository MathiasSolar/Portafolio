import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowLeft, Cpu, Film, BookOpen, ExternalLink, MapPin, Globe, Trophy, History, Music, User, Code, ChevronLeft, ChevronRight, GitBranch, Monitor } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

/* ════════════════════════════════════════════════
   COMPONENTE: SPOTLIGHT CARD (Efecto Linterna)
   ════════════════════════════════════════════════ */
function SpotlightCard({ children, className = "", spotlightColor = "rgba(129, 140, 248, 0.15)" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] bg-card-bg/40 border border-main-border/30 backdrop-blur-xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: TILT CARD 3D
   ════════════════════════════════════════════════ */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative w-full rounded-[2rem] ${className}`}
    >
      <div
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ════════════════════════════════════════════════ */
export default function MoreAboutMe() {
  const currentLang = useStore(langStore);
  const t = translations[currentLang].more;

  // Estado del Slider Cilíndrico
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4 Tarjetas para hacer que el efecto cilíndrico luzca genial
  const slidesData = [
    {
      id: "spotify",
      content: (
        <div className="w-full h-full bg-card-bg border border-[#1DB954]/30 rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-[0_30px_60px_rgba(29,185,84,0.15)] flex flex-col md:flex-row items-center gap-8">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#1DB954]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center justify-center animate-pulse shrink-0">
                <Music className="w-6 h-6 text-[#1DB954]" />
              </div>
              <div>
                <span className="text-[#1DB954] font-bold text-xs uppercase tracking-widest block">01 / Focus</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-text">{t.spotifyTitle}</h3>
              </div>
            </div>
            <p className="text-muted-text font-light leading-relaxed">{t.spotifyDesc}</p>
          </div>
          <div className="w-full md:w-1/2 h-[352px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative z-10">
            <iframe style={{ backgroundColor: 'transparent' }} src="https://open.spotify.com/embed/playlist/3O8x5wBocu3LOfSiQnUQC7?theme=0" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      )
    },
    {
      id: "lol",
      content: (
        <div className="w-full h-full bg-[#091428] border border-[#C89B3C]/40 rounded-[2rem] overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg')] bg-cover bg-[center_top_-20%] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091428] via-[#091428]/90 to-transparent" />
          <div className="relative z-10 w-full h-full p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="relative group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-black border-2 border-[#C89B3C] shadow-[0_0_30px_rgba(200,155,60,0.5)] flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
                  <img src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/master.png" alt="Master" className="w-12 h-12 drop-shadow-lg"/>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-[#C89B3C] text-[#C89B3C] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {t.lolRankLAS}
                </div>
              </div>
              <div>
                <span className="text-[#C89B3C] font-bold text-xs uppercase tracking-widest block mb-1">02 / Competitividad</span>
                <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tighter drop-shadow-lg">{t.lolUser}</h3>
                <p className="text-base text-[#C89B3C] font-bold flex items-center gap-2 mt-1"><Trophy className="w-4 h-4" /> {t.lolTitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-none px-6 py-3 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-md">
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2"><Globe className="w-3 h-3"/> Global</span>
                <span className="text-lg font-bold text-white">{t.lolRankWorld}</span>
              </div>
              <div className="flex-1 md:flex-none px-6 py-3 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-md">
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2"><History className="w-3 h-3"/> Histórico</span>
                <span className="text-lg font-bold text-white">{t.lolPrevSeasonsList}</span>
              </div>
              <motion.a href={t.lolLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto mt-4 md:mt-0 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-[#A07A2B] text-black rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(200,155,60,0.4)] outline-none">
                {t.lolUgg} <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "github",
      content: (
        <div className="w-full h-full bg-[#0d1117] border border-[#30363d] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#238636]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#238636]/20 border border-[#238636]/50 flex items-center justify-center shrink-0">
                  <GitBranch className="w-7 h-7 text-[#238636]" />
                </div>
                <div>
                  <span className="text-[#238636] font-bold text-xs uppercase tracking-widest block mb-1">03 / Comunidad</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Open Source</h3>
                </div>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-xl text-lg">
                Contribuyo activamente a la comunidad publicando librerías, compartiendo configuraciones y experimentando con arquitecturas de software modernas de alto rendimiento.
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 mt-8 shadow-inner">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                    <span>Actividad Anual</span>
                    <span className="text-[#238636]">+450 Commits</span>
                  </div>
                  <div className="h-3 w-full bg-[#30363d] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-[#238636] to-[#39d353]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "setup",
      content: (
        <div className="w-full h-full bg-gradient-to-br from-[#111827] to-[#030712] border border-gray-800 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center shrink-0">
                <Monitor className="w-7 h-7 text-gray-300" />
              </div>
              <div>
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-1">04 / Workflow</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Mi Workspace</h3>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-xl text-lg mb-8">
              Un entorno rigurosamente diseñado para máxima productividad, cero distracciones y un confort ergonómico que me permite codificar durante horas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold block mb-1">Estación Principal</span>
                <span className="text-sm text-gray-400 font-light">MacBook Pro M2 • 32GB RAM</span>
              </div>
              <div className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold block mb-1">Visualización</span>
                <span className="text-sm text-gray-400 font-light">Monitor Dual 27" 4K IPS</span>
              </div>
              <div className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold block mb-1">Periféricos</span>
                <span className="text-sm text-gray-400 font-light">MX Master 3S + Keychron Q1</span>
              </div>
              <div className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold block mb-1">Audio</span>
                <span className="text-sm text-gray-400 font-light">Sony WH-1000XM5 (ANC)</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const totalSlides = slidesData.length;
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Parámetros matemáticos del Cilindro 3D
  const cylinderRadius = 750; // Profundidad 
  const cylinderAngle = 45; // Separación en grados

  const icons = [
    <Cpu className="w-6 h-6 text-accent-cyan" />, 
    <Film className="w-6 h-6 text-accent-cyan" />, 
    <BookOpen className="w-6 h-6 text-accent-cyan" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="bg-transparent min-h-screen text-secondary-text selection:bg-accent-cyan selection:text-black font-sans pb-24 pt-32 px-6 overflow-hidden">
      
      {/* Luces de fondo del escenario */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- CABECERA --- */}
        <RevealSection>
          <motion.a 
            href="/" 
            whileHover={{ x: -8, scale: 1.05 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-main-border/10 border border-main-border/30 rounded-full text-primary-text hover:bg-main-border/30 hover:border-accent-cyan/50 transition-all mb-12 text-sm font-bold backdrop-blur-md outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </motion.a>
        </RevealSection>

        <RevealSection delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-text via-primary-text to-muted-text tracking-tighter leading-tight mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-text font-light leading-relaxed max-w-4xl mb-16 border-l-4 border-accent-cyan pl-6">
            {t.desc}
          </p>
        </RevealSection>

        {/* ════════════════════════════════════════════════
            1. BENTO GRID PRINCIPAL
            ════════════════════════════════════════════════ */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]"
        >
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-2 h-full">
            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shadow-[0_0_30px_rgba(129,140,248,0.2)]">
                    <User className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-text">¿Quién soy?</h3>
                </div>
                <p className="text-lg text-secondary-text leading-relaxed font-light z-10 relative">
                  Soy un desarrollador que encuentra el equilibrio perfecto entre el diseño estético y la ingeniería de software profunda. Mi enfoque se centra en crear experiencias digitales que no solo funcionen a la perfección bajo el capó, sino que también cautiven al usuario desde el primer segundo.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-1 h-full">
            <SpotlightCard className="h-full p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full h-full">
                {t.hobbies.map((hobby, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col justify-center items-center text-center p-4 rounded-2xl bg-main-border/5 border border-main-border/30 cursor-crosshair h-full"
                  >
                    <div className="mb-3">{icons[i]}</div>
                    <span className="text-sm font-bold text-primary-text">{hobby.title}</span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 row-span-1 h-full">
            <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.15)" className="h-full p-6 bg-gradient-to-br from-card-bg/40 to-purple-900/10 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Estudio Constante</h3>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                Nuevas arquitecturas y librerías. Nunca dejo de aprender.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 row-span-1 h-full">
            <SpotlightCard className="h-full p-6 flex flex-col items-center justify-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-accent-cyan/30 blur-xl rounded-full animate-pulse" />
                <MapPin className="w-10 h-10 text-accent-cyan relative z-10" />
              </div>
              <span className="text-xl font-bold text-primary-text">Coyhaique</span>
              <span className="text-sm text-muted-text tracking-widest uppercase mt-1">Chile</span>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════════════
            2. SLIDER CILÍNDRICO 3D (COVER FLOW REAL)
            ════════════════════════════════════════════════ */}
        <RevealSection delay={300} className="mt-32">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text flex items-center gap-3">
              <span className="text-accent-cyan text-xl">✦</span> Plus / Extras
            </h2>
          </div>

          {/* CONTENEDOR PRINCIPAL CON BOTONES LATERALES */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* Botón Izquierdo (Flotando sobre el carrusel) */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 md:-left-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-main-bg/80 border border-main-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-primary-text hover:bg-main-border/80 hover:scale-110 transition-all backdrop-blur-xl outline-none cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cámara 3D (Perspective) */}
            <div className="relative w-full h-[650px] md:h-[500px] perspective-[1500px] flex items-center justify-center overflow-visible px-10">
              
              <motion.div 
                className="absolute w-full h-full flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateY: currentSlide * -cylinderAngle,
                  z: -cylinderRadius 
                }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
              >
                
                {slidesData.map((slide, index) => {
                  // Calcular la distancia más corta para saber cuál está al frente
                  let diff = index - currentSlide;
                  if (diff > totalSlides / 2) diff -= totalSlides;
                  if (diff < -totalSlides / 2) diff += totalSlides;
                  
                  const isActive = diff === 0;

                  return (
                    <motion.div
                      key={slide.id}
                      className="absolute w-full max-w-4xl h-full flex items-center justify-center"
                      style={{
                        transform: `rotateY(${index * cylinderAngle}deg) translateZ(${cylinderRadius}px)`,
                        transformStyle: "preserve-3d"
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        filter: isActive ? "blur(0px)" : "blur(12px)",
                      }}
                      transition={{ duration: 0.5 }}
                      onClick={() => { if (!isActive) setCurrentSlide(index); }}
                    >
                      <div className={`w-full h-full transition-all duration-300 ${isActive ? 'pointer-events-auto cursor-default' : 'pointer-events-none cursor-pointer'}`}>
                        <TiltCard className="h-full">
                          {slide.content}
                        </TiltCard>
                      </div>
                    </motion.div>
                  );
                })}
                
              </motion.div>
            </div>

            {/* Botón Derecho (Flotando sobre el carrusel) */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 md:-right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-main-bg/80 border border-main-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-primary-text hover:bg-main-border/80 hover:scale-110 transition-all backdrop-blur-xl outline-none cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
          </div>
          
          {/* Puntos Indicadores */}
          <div className="flex justify-center gap-3 mt-12 relative z-30">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 outline-none cursor-pointer ${
                  currentSlide === index ? 'w-10 bg-accent-cyan shadow-[0_0_15px_rgba(129,140,248,0.6)]' : 'bg-main-border/50 hover:bg-main-border'
                }`}
              />
            ))}
          </div>

        </RevealSection>

      </div>
    </div>
  );
}