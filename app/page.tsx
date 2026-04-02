export default function Home() {
  return (
    <main className="bg-[#0B0F14] text-white overflow-hidden font-sans scroll-smooth">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center lg:justify-start pt-20 pb-12 lg:py-0">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          {/* DESKTOP */}
          <div className="hidden md:block absolute inset-0">
            <img
              src="/images/gb-hero.png"
              className="w-full h-full object-cover object-right"
              alt="Dr Gabriel Baião"
            />
          </div>

          {/* MOBILE */}
          <div className="block md:hidden absolute inset-0">
            <img
              src="/images/gb1.jpg"
              className="w-full h-full object-cover object-top"
              alt="Dr Gabriel Baião"
            />
          </div>

          {/* GRADIENTE DESKTOP */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/90 to-transparent"></div>

          {/* GRADIENTE MOBILE */}
          <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/85 to-transparent"></div>

        </div>

        {/* GLOW */}
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-600/20 blur-[100px] lg:blur-[120px] rounded-full pointer-events-none"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-32 lg:mt-0">
            <img
              src="/images/gb-logo-branca.png"
              className="w-28 lg:w-32 mb-8 opacity-90"
              alt="Logo Dr. Gabriel Baião"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Você não precisa
              <span className="block text-blue-400 mt-1">
                conviver com a dor.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Tratamentos modernos, precisos e minimamente invasivos para dores crônicas e agudas.
              <br className="hidden sm:block" />
              <strong className="text-white font-medium mt-2 block">
                Atendimento em Floriano, sem precisar sair da cidade.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5589981396444?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Gabriel%20Bai%C3%A3o%20em%20Floriano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] w-full sm:w-auto"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar consulta
              </a>

              <a
                href="#sobre"
                className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Saiba mais
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - SOBRE */}
      <section id="sobre" className="py-20 lg:py-32 relative">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-[#101826]"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* FOTO */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-3xl pointer-events-none"></div>
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src="/images/gb1.jpg"
                className="w-full h-full object-cover object-[75%_center] md:object-right"
                alt="Dr Gabriel Baião em Atendimento"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold bg-blue-400/10 px-4 py-2 rounded-full mb-6">
              Atendimento em Floriano
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tratar a dor não é
              <span className="block text-blue-400 mt-1">
                só aliviar sintomas.
              </span>
            </h2>

            <blockquote className="text-gray-300 mb-6 text-lg sm:text-xl italic border-l-4 border-blue-500 pl-4 text-left">
              “Acredito que tratar a dor vai muito além de prescrever remédios;
              é sobre devolver a vontade de viver bem.”
            </blockquote>

            <p className="text-gray-400 mb-10 text-base sm:text-lg leading-relaxed text-left">
              O Dr. Gabriel Baião é especialista no tratamento da dor, com foco
              em diagnósticos precisos e abordagens modernas.
              Cada paciente recebe um plano individualizado, com atenção total à
              causa real do problema.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <span className="font-medium text-gray-200">Especialista em Dor</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="font-medium text-gray-200 text-sm">Procedimentos Minimamente Invasivos</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <span className="font-medium text-gray-200">CRM-PI 8871</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <span className="font-medium text-gray-200">Atendimento Humanizado</span>
              </div>

            </div>

            {/* ENDEREÇO & BOTÃO FINAL */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-8 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-start gap-4 text-left">
                <div className="mt-1 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    Espaço Vitta
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    R. Milad Kalume, 22 - Centro<br />
                    Floriano - PI
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5589981396444?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Gabriel%20Bai%C3%A3o%20em%20Floriano"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
              >
                Agendar
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* MAPA */}
      <section className="h-[300px] lg:h-[450px] w-full bg-[#101826] relative">
        <iframe
          src="https://www.google.com/maps?q=R.+Milad+Kalume,+22+-+Centro,+Floriano+-+PI&output=embed"
          className="w-full h-full border-0 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Espaço Vitta em Floriano"
        />
      </section>

    </main>
  );
}