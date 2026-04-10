"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const locationsData = {
  floriano: { city: "Floriano", phone: "5589981396444" },
  bom_jesus: { city: "Bom Jesus", phone: "5589981396444" },
  oeiras: { city: "Oeiras", phone: "5589981396444" },
  pastos_bons: { city: "Pastos Bons", phone: "5589981396444" },
  uruçui: { city: "Uruçuí", phone: "5589981396444" },
  corrente: { city: "Corrente", phone: "5589981396444" },
  curimata: { city: "Curimatá", phone: "5589981396444" },
};

function RedirectContent() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState(locationsData.floriano);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const utmCampaign = searchParams.get("utm_campaign");
    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");

    let currentLocation = locationsData.floriano;

    if (utmCampaign) {
      const normalizedUtm = utmCampaign.toLowerCase().replaceAll("-", "_");
      if (normalizedUtm in locationsData) {
        // @ts-ignore
        currentLocation = locationsData[normalizedUtm];
        setLocation(currentLocation);
      }
    }

    const waMessage = encodeURIComponent(
      `Olá, vim do anúncio e gostaria de agendar uma consulta com o Dr. Gabriel Baião em ${currentLocation.city}`
    );

    const generatedLink = `https://wa.me/${currentLocation.phone}?text=${waMessage}`;
    setWaLink(generatedLink);

    // EVENTO PRO PIXEL
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'WhatsAppRedirect', {
        city: currentLocation.city,
        utm_campaign: utmCampaign,
        utm_source: utmSource,
        utm_medium: utmMedium
      });

      (window as any).fbq('track', 'Lead', {
        content_name: currentLocation.city,
        campaign: utmCampaign
      });
    }

    // EVENTO PRO GTM
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "whatsapp_redirect",
        city: currentLocation.city,
        utm_campaign: utmCampaign,
        utm_source: utmSource,
        utm_medium: utmMedium,
        page: "/whatsapp"
      });
    }

    // REDIRECIONAMENTO SEGURO
    const timer = setTimeout(() => {
      window.location.href = generatedLink;
    }, 2000);

    return () => clearTimeout(timer); // Agora a variável 'timer' está acessível
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-8">
        <img
          src="/images/gb-logo-branca.png"
          className="w-32 opacity-90"
          alt="Logo Dr. Gabriel Baião"
        />

        <div className="space-y-4">
          <div className="relative flex justify-center items-center w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <h1 className="text-xl font-semibold mt-6">
            Conectando ao WhatsApp...
          </h1>
          <p className="text-gray-400 text-sm">
            Ambiente 100% seguro. O atendimento para <strong className="text-white">{location.city}</strong> será iniciado em instantes.
          </p>
        </div>

        {waLink && (
          <a
            href={waLink}
            className="mt-8 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)]"
          >
            Ir para o WhatsApp agora
          </a>
        )}
      </div>
    </main>
  );
}

export default function RedirectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0F14]" />}>
      <RedirectContent />
    </Suspense>
  );
}