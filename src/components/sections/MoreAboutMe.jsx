import React from 'react';
import { ArrowLeft, Cpu, Film, BookOpen, ExternalLink, MapPin, Globe, Trophy, History, Music } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function MoreAboutMe() {
  const currentLang = useStore(langStore);
  const t = translations[currentLang].more;

  const icons = [
    <Cpu className="w-6 h-6 text-cyan-400" />, 
    <Film className="w-6 h-6 text-cyan-400" />, 
    <BookOpen className="w-6 h-6 text-cyan-400" />
  ];

  return (
    <div className="bg-black min-h-screen text-gray-200 selection:bg-cyan-400 selection:text-black font-sans pb-20">
      
      <div className="max-w-6xl mx-auto pt-32 px-6 md:px-12">
        
        {/* --- BOTÓN VOLVER --- */}
        <RevealSection>
          <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors mb-10 text-sm font-bold tracking-widest uppercase outline-none">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>
        </RevealSection>

        {/* --- CABECERA --- */}
        <RevealSection delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 max-w-4xl">
            Más allá de las pantallas y el código.
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl mb-16">
            {t.desc}
          </p>
        </RevealSection>

        {/* --- SECCIÓN 1: INTERESES --- */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.hobbies.map((hobby, i) => (
              <div key={i} className="flex flex-col group bg-[#0d1117]/60 border border-white/5 p-6 md:p-8 rounded-[2rem] hover:border-white/10 hover:bg-[#0d1117] transition-all duration-300">
                <div className="mb-5 w-12 h-12 bg-black border border-white/10 rounded-2xl flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                  {icons[i]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {hobby.title}
                </h3>
                <p className="text-[15px] text-gray-400 leading-relaxed font-light">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

        {/* --- SECCIÓN 2: SPOTIFY (TARJETA PANORÁMICA ARREGLADA) --- */}
        <RevealSection delay={300}>
          <div className="w-full bg-[#0d1117] border border-white/10 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:border-[#1DB954]/30 transition-all duration-500 shadow-xl mb-16">
            
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1DB954]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#1DB954]/20 transition-all duration-500"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              
              <div className="flex flex-col justify-center">
                <span className="text-[#1DB954] font-bold tracking-widest uppercase text-xs mb-3 block">
                  01 / Focus
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/20 flex items-center justify-center">
                    <Music className="w-5 h-5 text-[#1DB954]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    {t.spotifyTitle}
                  </h2>
                </div>
                <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-md">
                  {t.spotifyDesc}
                </p>
              </div>

              {/* Lado Derecho: Reproductor de Spotify con alto forzado y sin el fondo gris que sobraba */}
              <div className="w-full h-[352px] ">
                <iframe 
                  style={{ borderRadius: '16px', backgroundColor: 'transparent' }} 
                  src="https://open.spotify.com/embed/playlist/3O8x5wBocu3LOfSiQnUQC7?theme=0" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </div>
        </RevealSection>

        {/* --- SECCIÓN 3: LEAGUE OF LEGENDS --- */}
        <RevealSection delay={400}>
          <div className="w-full bg-gradient-to-br from-[#091428] to-[#0a0d14] border border-[#C89B3C]/30 rounded-[2rem] overflow-hidden relative group hover:border-[#C89B3C]/50 transition-all duration-500 shadow-xl flex flex-col lg:flex-row">
            
            {/* Lado Izquierdo: Imagen de Azir */}
            <div className="w-full lg:w-[45%] relative min-h-[300px] lg:min-h-full overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg')] bg-cover bg-[center_top_-10%] transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#091428] via-[#091428]/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-2xl mb-3 tracking-tighter">
                  {t.lolUser}
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C89B3C]/50 text-[#C89B3C] font-bold text-sm shadow-lg">
                  <img 
                    src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/master.png" 
                    alt="Master" 
                    className="w-5 h-5 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  />
                  {t.lolRank}
                </div>
              </div>
            </div>

            {/* Lado Derecho: Textos y Estadísticas */}
            <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-center relative z-10">
              <span className="text-[#C89B3C] font-bold tracking-widest uppercase text-xs mb-3 block">
                02 / Competitividad
              </span>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                {t.lolTitle}
              </h2>
              <p className="text-[15px] text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                {t.lolDesc}
              </p>

              {/* Grid de Estadísticas */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-xl p-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#0AC8B9] uppercase tracking-widest mb-1.5">
                    <MapPin className="w-3 h-3"/> Servidor
                  </span>
                  <span className="text-xl font-bold text-white">{t.lolRankLAS}</span>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-xl p-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#C89B3C] uppercase tracking-widest mb-1.5">
                    <Globe className="w-3 h-3"/> Global
                  </span>
                  <span className="text-xl font-bold text-white">{t.lolRankWorld}</span>
                </div>

                <div className="col-span-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-xl p-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    <History className="w-3 h-3"/> {t.lolPrevSeasonsTitle}
                  </span>
                  <span className="text-base font-medium text-gray-200">{t.lolPrevSeasonsList}</span>
                </div>
              </div>

              {/* Botón U.GG */}
              <div>
                <a 
                  href={t.lolLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-gray-200 text-black rounded-full font-bold text-sm transition-all hover:scale-105 outline-none"
                >
                  {t.lolUgg} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </RevealSection>

      </div>
    </div>
  );
}