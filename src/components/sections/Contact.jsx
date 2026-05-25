import React, { useState } from 'react';
import { Send, Check, ShieldCheck, Download } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Contact() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const currentLang = useStore(langStore);
  const t = translations[currentLang].contact;

  return (
    <section id="contact" className="py-32 lg:py-40 px-6 bg-transparent relative overflow-hidden border-t border-main-border/30">
      {/* Fondo espacial minimalista integrado */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Resplandor índigo de horizonte en el fondo */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/5 dark:bg-indigo-950/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-0 mt-4">
        <RevealSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight uppercase">
            {t.title}
          </h2>
        </RevealSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="flex flex-col gap-6">
            <RevealSection delay={100} className="h-full">
              <div className="bg-card-bg/60 backdrop-blur-xl border border-main-border rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl h-full justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative mb-5 z-10">
                  <div className="absolute inset-0 bg-accent-cyan rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img src="/mi-foto.jpg" alt="Mathias Solar" className="w-28 h-28 rounded-full object-cover border-2 border-accent-cyan/30 p-1 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary-text mb-1 z-10">Mathias Solar</h3>
                <p className="text-accent-cyan font-medium text-sm mb-6 z-10">{t.role}</p>
                <a href="#" className="w-full inline-flex justify-center items-center gap-2 py-3 bg-accent-cyan text-white dark:text-black rounded-xl font-semibold hover:bg-primary-text hover:text-main-bg transition-all duration-300 z-10 outline-none">
                  <Download className="w-4 h-4" /> {t.download}
                </a>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                <a href="#" className="bg-card-bg/40 backdrop-blur-md border border-main-border rounded-2xl p-4 flex items-center justify-center text-muted-text transition-all hover:-translate-y-1 group hover:border-accent-cyan hover:text-primary-text hover:shadow-[0_10px_20px_rgba(129,140,248,0.15)] outline-none" title="LinkedIn">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="bg-card-bg/40 backdrop-blur-md border border-main-border rounded-2xl p-4 flex items-center justify-center text-muted-text transition-all hover:-translate-y-1 group hover:border-accent-cyan hover:text-primary-text hover:shadow-[0_10px_20px_rgba(129,140,248,0.15)] outline-none" title="GitHub">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="bg-card-bg/40 backdrop-blur-md border border-main-border rounded-2xl p-4 flex items-center justify-center text-muted-text transition-all hover:-translate-y-1 group hover:border-accent-cyan hover:text-primary-text hover:shadow-[0_10px_20px_rgba(129,140,248,0.15)] outline-none" title="Instagram">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="bg-card-bg/40 backdrop-blur-md border border-main-border rounded-2xl p-4 flex items-center justify-center text-muted-text transition-all hover:-translate-y-1 group hover:border-accent-cyan hover:text-primary-text hover:shadow-[0_10px_20px_rgba(129,140,248,0.15)] outline-none" title="Discord">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0788.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
                <a href="#" className="bg-card-bg/40 backdrop-blur-md border border-main-border rounded-2xl p-4 flex items-center justify-center text-muted-text transition-all hover:-translate-y-1 group hover:border-accent-cyan hover:text-primary-text hover:shadow-[0_10px_20px_rgba(129,140,248,0.15)] outline-none" title="WhatsApp">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </RevealSection>
          </div>

          <RevealSection delay={300} className="h-full mt-6 lg:mt-0">
            <div className="bg-card-bg/60 backdrop-blur-xl border border-main-border p-8 md:p-10 rounded-3xl shadow-2xl h-full flex flex-col">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-text mb-2 flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent-cyan" />
                  {t.subtitle}
                </h3>
                <p className="text-sm text-muted-text">{t.desc}</p>
              </div>
              
              <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-text uppercase tracking-wider pl-1">{t.name}</label>
                    <input 
                      type="text" 
                      placeholder={t.nameHolder} 
                      className="w-full bg-input-bg border border-main-border rounded-xl px-4 py-3.5 text-primary-text placeholder:text-muted-text/30 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-text uppercase tracking-wider pl-1">{t.email}</label>
                    <input 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="w-full bg-input-bg border border-main-border rounded-xl px-4 py-3.5 text-primary-text placeholder:text-muted-text/30 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-xs font-bold text-muted-text uppercase tracking-wider pl-1">{t.msg}</label>
                  <textarea 
                    placeholder={t.msgHolder}
                    className="w-full flex-1 min-h-[120px] bg-input-bg border border-main-border rounded-xl px-4 py-3 text-primary-text placeholder:text-muted-text/30 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none outline-none"
                  ></textarea>
                </div>

                <div className="captcha-box flex items-center justify-between bg-input-bg border border-main-border rounded-xl p-4 cursor-pointer hover:bg-main-border/5 transition-colors mt-2" onClick={() => setCaptchaChecked(true)}>
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${captchaChecked ? 'bg-accent-cyan border-accent-cyan' : 'border-main-border bg-transparent'}`}>
                      {captchaChecked && <Check className="w-3.5 h-3.5 text-white dark:text-black" strokeWidth={3} />}
                    </div>
                    <span className="text-xs font-medium text-secondary-text">{t.bot}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-5 h-5 text-muted-text mb-0.5" strokeWidth={1.5} />
                    <span className="text-[7px] text-muted-text font-bold uppercase tracking-widest">Security</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 mt-2 bg-accent-cyan border border-accent-cyan text-white dark:text-black font-semibold rounded-xl hover:bg-primary-text hover:text-main-bg hover:border-primary-text transition-all duration-300 outline-none cursor-pointer"
                >
                  {t.btn}
                </button>
              </form>
            </div>
          </RevealSection>

        </div>
      </div>
    </section>
  );
}