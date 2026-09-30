export const SITE_CONFIG = {
  name: "Dallas Tour & Travel",
  legalName: "PT. Delta Laras Wisata",
  url: process.env.GITHUB_ACTIONS === "true" ? "https://enefisualcode.github.io/dallastourtravel" : "https://www.dallastourtravel.com",
  whatsapp: "6281578256809",
  phone: "0815-7825-6809",
  email: "",
  address: "Binawan Building, Office Tower, Lobby 3 Lantai LG No. 01–05, Jl. Kalibata Raya No. 25–30, Jakarta Timur",
  social: { instagram: "officialdallastourtravel", facebook: "DALLAS TOUR & TRAVEL", tiktok: "dallastourtravel" },
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const consultationMessage = "Halo Dallas Tour & Travel, saya ingin konsultasi mengenai paket Umrah.";
