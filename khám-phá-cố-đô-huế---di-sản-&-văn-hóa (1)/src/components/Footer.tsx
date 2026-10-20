import { Fragment } from 'react';
import logo1 from '@/assets/images/logo1.jpg';
import logo4 from '@/assets/images/logo4.jpg';
import tmlogo from '@/assets/images/TMlogo.png';

interface FooterProps {
  lang?: 'VI' | 'EN';
}

export default function Footer({ lang = 'VI' }: FooterProps) {
  const isEn = lang === 'EN';

  const companies = [
    {
      src: logo1,
      alt: 'Elite Travel Group Logo',
      name: 'Elite Travel Group',
    },
    {
      src: logo4,
      alt: 'THPT Lương Thế Vinh Logo',
      name: 'THPT Lương Thế Vinh',
    },
    {
      src: tmlogo,
      alt: 'TheMaster company Logo',
      name: 'TheMaster company',
    },
  ];

  return (
    <footer className="py-10 mt-auto border-t border-white/10 bg-black/60 backdrop-blur-md relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Company Logos with collaboration 'X' in between */}
        <div className="flex flex-nowrap sm:flex-wrap justify-center items-start gap-1.5 sm:gap-6 md:gap-8 max-w-full">
          {companies.map((company, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <div 
                  className="flex items-center justify-center h-14 sm:h-20 select-none shrink-0 px-1 sm:px-2"
                  aria-label={isEn ? 'Partnership' : 'Hợp tác'}
                  title={isEn ? 'Partnership' : 'Hợp tác'}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.75)] font-mono leading-none hover:scale-125 hover:drop-shadow-[0_0_18px_rgba(251,191,36,0.95)] transition-all duration-300">
                    ✕
                  </span>
                </div>
              )}
              <div 
                className="flex flex-col items-center text-center group w-22 sm:w-32 md:w-36 shrink-0 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-400/60 p-0.5 bg-stone-900 shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] group-hover:border-amber-400 transition-all duration-300 flex items-center justify-center">
                  <img 
                    src={company.src} 
                    alt={company.alt} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-[11px] sm:text-sm font-bold text-amber-200 mt-2 sm:mt-3 tracking-wide group-hover:text-amber-300 transition-colors leading-tight">
                  {company.name}
                </h4>
              </div>
            </Fragment>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-6 text-center">
          <p className="text-stone-400 text-[11px] sm:text-xs font-mono">
            © 2026 Elite Travel Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
