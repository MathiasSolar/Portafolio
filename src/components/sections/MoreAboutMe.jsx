import React, { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
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
  PÁGINA PRINCIPAL
   ════════════════════════════════════════════════ */
export default function MoreAboutMe() {
  const currentLang = useStore(langStore);
  const t = translations[currentLang].more;

  // Estado del Slider Cilíndrico
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4 Tarjetas estabilizadas y ordenadas
  const slidesData = [
    {
  id: "spotify",
  content: (
    <div className="w-full h-full bg-card-bg border border-main-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DB954]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

      {/* Texto */}
      <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        
        <div className="flex items-center gap-4 mb-6">
          
          <div className="w-14 h-14 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center justify-center shrink-0">
            <Music className="w-7 h-7 text-[#1DB954]" />
          </div>

          <div className="text-left">
            <span className="text-[#1DB954] font-bold text-xs uppercase tracking-widest block mb-1">
              01 / Focus
            </span>

            <h3 className="text-3xl lg:text-4xl font-bold text-primary-text">
              {t.spotifyTitle}
            </h3>
          </div>

        </div>

        <p className="text-muted-text font-light leading-relaxed text-lg max-w-md">
          {t.spotifyDesc}
        </p>

      </div>

      {/* Spotify */}
      <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center lg:justify-end">
        
        <div className="w-full max-w-[420px] h-[352px] md:h-[400px] rounded-2xl overflow-hidden border border-[#282828] shadow-2xl bg-black">
          
          <iframe
            className="w-full h-full"
            src="https://open.spotify.com/embed/playlist/3O8x5wBocu3LOfSiQnUQC7?theme=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />

        </div>

      </div>

    </div>
  )
},
{
  id: "lol",
  content: (
    <div className="w-full h-full bg-[#091428] border border-[#C89B3C]/30 rounded-[2rem] relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg')] bg-cover bg-center opacity-15" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#091428] via-[#091428]/85 to-[#091428]/70" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#091428] via-transparent to-[#091428]/30" />
      </div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C89B3C]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-10 md:px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#C89B3C] bg-black/30 backdrop-blur-md mb-8">
            <span className="text-[#C89B3C] text-xs font-bold tracking-[0.2em] uppercase">
              02 / Competitividad
            </span>
          </div>

          {/* User */}
          <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-none mb-6 drop-shadow-xl">
            {t.lolUser}
          </h3>

          {/* Subtitle */}
          <div className="flex items-center gap-3 text-[#C89B3C] mb-8">
            <Trophy className="w-6 h-6" />

            <span className="text-xl font-bold">
              {t.lolTitle}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-light">
            Competitivo por naturaleza. Cada partida es una oportunidad para aprender, mejorar y superar mis propios límites.
          </p>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-6">

          {/* Rank */}
          <div className="relative mb-10">

            <div className="w-32 h-32 rounded-full bg-black border-4 border-[#C89B3C] flex items-center justify-center shadow-[0_0_50px_rgba(200,155,60,0.35)]">
              
              <img
                src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/master.png"
                alt="Master"
                className="w-16 h-16 object-contain"
              />

            </div>

            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#091428] border border-[#C89B3C]">
              
              <span className="text-[#C89B3C] font-black text-xl whitespace-nowrap">
                Master I
              </span>

            </div>

          </div>

          {/* Region */}
          <span className="text-gray-400 tracking-[0.4em] uppercase text-base mb-6">
            LAS
          </span>

          {/* Rank LAS */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-10 h-[1px] bg-[#C89B3C]/30" />

            <span className="text-[#C89B3C] uppercase tracking-[0.25em] text-base font-semibold">
              Rank <span className="text-2xl font-black">1</span> de LAS
            </span>

            <div className="w-10 h-[1px] bg-[#C89B3C]/30" />

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 w-full max-w-xl mb-8">

            {/* Global */}
            <div className="bg-black/50 border border-white/10 rounded-[2rem] p-6 backdrop-blur-md text-center">

              <Globe className="w-7 h-7 text-[#C89B3C] mx-auto mb-4" />

              <span className="block text-gray-400 uppercase tracking-[0.3em] text-xs mb-3">
                Rank Global
              </span>

              <span className="block text-5xl font-black text-white leading-none mb-2">
                #13
              </span>

              <span className="block text-white font-bold text-2xl">
                Mundial
              </span>

            </div>

            {/* Histórico */}
            <div className="bg-black/50 border border-white/10 rounded-[2rem] p-6 backdrop-blur-md text-center">

              <History className="w-7 h-7 text-[#C89B3C] mx-auto mb-4" />

              <span className="block text-gray-400 uppercase tracking-[0.3em] text-xs mb-4">
                Histórico
              </span>

              <div className="flex flex-col gap-3">

                <span className="text-white font-bold text-2xl">
                  S24 Master
                </span>

                <span className="text-white font-bold text-2xl">
                  S25 Master
                </span>

              </div>

            </div>

          </div>

          {/* Button */}
          <motion.a
            href={t.lolLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-lg flex items-center justify-center gap-3 px-8 py-3 mb-4 bg-gradient-to-r from-[#D4A63A] to-[#C89B3C] text-black rounded-[1.5rem] font-black text-base uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(200,155,60,0.35)]"
          >
            Ver Perfil en U.GG

            <ExternalLink className="w-5 h-5" />
          </motion.a>

        </div>

      </div>

    </div>
  )
},
    {
      id: "github",
      content: (
        <div className="w-full h-full bg-[#0d1117] border border-[#30363d] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#238636]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#238636]/20 border border-[#238636]/50 flex items-center justify-center mb-6">
                <GitBranch className="w-8 h-8 text-[#238636]" />
              </div>
              <span className="text-[#238636] font-bold text-xs uppercase tracking-widest block mb-2">03 / Comunidad</span>
              <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Open Source</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-lg mx-auto">
                Contribuyo activamente a la comunidad publicando librerías, compartiendo configuraciones y experimentando con arquitecturas de software modernas de alto rendimiento.
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 md:p-8 mt-4 shadow-inner max-w-xl mx-auto w-full">
              <div className="flex justify-between text-sm text-gray-500 mb-3 font-mono">
                <span>Actividad Anual</span>
                <span className="text-[#238636]">+450 Commits</span>
              </div>
              <div className="h-4 w-full bg-[#30363d] rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-[#238636] to-[#39d353]" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "setup",
      content: (
        <div className="w-full h-full bg-gradient-to-br from-[#111827] to-[#030712] border border-gray-800 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-gray-300" />
              </div>
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">04 / Workflow</span>
              <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Mi Workspace</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Un entorno rigurosamente diseñado para máxima productividad, cero distracciones y un confort ergonómico que me permite codificar durante horas.
              </p>
            </div>
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold text-lg block mb-1">Estación Principal</span>
                <span className="text-gray-400 font-light">MacBook Pro M2 • 32GB RAM</span>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold text-lg block mb-1">Visualización</span>
                <span className="text-gray-400 font-light">Monitor Dual 27" 4K IPS</span>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold text-lg block mb-1">Periféricos</span>
                <span className="text-gray-400 font-light">MX Master 3S + Keychron Q1</span>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
                <span className="text-white font-bold text-lg block mb-1">Audio</span>
                <span className="text-gray-400 font-light">Sony WH-1000XM5 (ANC)</span>
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

  // Función matemática robusta para Cover Flow Seguro (Evita que se tapen)
  const getCoverFlowStyles = (index, current) => {
    let diff = index - current;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;

    if (diff === 0) {
      // Activa: Al frente y centrada
      return { x: "0%", z: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 30 };
    } else if (diff === 1) {
      // Siguiente: A la derecha, atrás y girada
      return { x: "25%", z: -100, rotateY: -15, scale: 0.85, opacity: 0.3, zIndex: 20 };
    } else if (diff === -1) {
      // Anterior: A la izquierda, atrás y girada
      return { x: "-25%", z: -100, rotateY: 15, scale: 0.85, opacity: 0.3, zIndex: 20 };
    } else {
      // Ocultas en el fondo
      return { x: "0%", z: -200, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 10 };
    }
  };

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
            2. SLIDER "COVER FLOW" SEGURO (Sin colisiones)
            ════════════════════════════════════════════════ */}
        <RevealSection delay={300} className="mt-32">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text flex items-center gap-3">
              <span className="text-accent-cyan text-xl">✦</span> Plus / Extras
            </h2>
          </div>

          <div className="relative w-full flex items-center justify-center">
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 md:-left-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-main-bg/80 border border-main-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-primary-text hover:bg-main-border/80 hover:scale-110 transition-all backdrop-blur-xl outline-none cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Contenedor Perspectiva 3D */}
            <div className="relative w-full h-[650px] md:h-[550px] perspective-[1500px] flex items-center justify-center overflow-visible px-4 md:px-10">
              
              <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                
                {slidesData.map((slide, index) => {
                  const isActive = index === currentSlide;
                  
                  return (
                    <motion.div
                      key={slide.id}
                      className="absolute w-full max-w-5xl h-full flex items-center justify-center"
                      initial={false}
                      animate={getCoverFlowStyles(index, currentSlide)}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      style={{ transformStyle: "preserve-3d" }}
                      onClick={() => { if (!isActive) setCurrentSlide(index); }}
                    >
                      <div className={`w-full h-full transition-all duration-300 ${isActive ? 'pointer-events-auto cursor-default' : 'pointer-events-none cursor-pointer'}`}>
                        {slide.content}
                      </div>
                    </motion.div>
                  );
                })}
                
              </div>
            </div>

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